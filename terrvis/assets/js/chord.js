let margin = {
  top: 5,
  left: 5,
  bottom: 5,
  right: 5
}

let width = 1500 - margin.left - margin.right;
let height = 800 - margin.top - margin.bottom;
let innerRadius = Math.min(width, height) * .23;
let outerRadius = innerRadius * 1.1;

let svg = d3.select('body #chartContainer').append('svg').attr("box-shadow", "0px 0px 20px 0px rgba(0, 0, 0, 0.8)").attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).attr("transform", "translate(" + margin.left + "," + margin.top + ")").append("g").attr("id", "chordDiagram").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
window.onload( dropdown_callback('Target type'))
//************************************************************
// CHANGE THE CSV FILE AND THE CHART IS COMPUTED AUTOMATICALLY
//************************************************************
// d3.csv('./data/adjacency/adj_gname_targtype.csv', createChordDiagram);

function createChordDiagram(data) {

  let firstColumn = 'gname';

  // category names of the selected parameter, i.e regions, etc
  let categories = Object.keys(data[0]);
  categories = categories.slice(1, categories.length);

  let fc = data.map(function(d) {
      return d[firstColumn];
    }),
    gnames = fc.slice(0), // terrorist groups
    matrix_size = (Object.keys(data[0]).length - 1) + fc.length,
    matrix = [];

  //Create an empty square matrix of zero placeholders, the size of the data
  for (let i = 0; i < matrix_size; i++) {
    matrix.push(new Array(matrix_size + 1).join('0').split('').map(parseFloat));
  }

  //go through the data and convert all to numbers except "first_column"
  for (let i = 0; i < data.length; i++) {

    let j = data.length; //counter

    for (let prop in data[i]) {
      if (prop != firstColumn) {
        fc.push(prop);
        matrix[i][j] = +data[i][prop];
        matrix[j][i] = +data[i][prop];
        j++;
      }
    }
  }

  // create chord diagram
  let chord = d3.chord().padAngle(0.05).sortSubgroups(d3.descending);

  let chordgroups = chord(matrix).groups.map(function(d) {
    d.angle = (d.startAngle + d.endAngle) / 2;
    return d;
  });

  // arcs and ribbons
  let arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
  let ribbon = d3.ribbon().radius(innerRadius);

  // define the colormap for the categories
  let fill = d3.schemeCategory20b;
  // if there are more categories than 20, we extend the color scheme by repeating it from the start
  if (categories.length > 20) {
    let diff = categories.length - 20;
    for (let i = 0; i < diff; i++) {
      fill.push(fill[i]);
    }
  }
  // if there are few categories we carefully choose which colors to use
  let newfill = [];
  if (categories.length == 2) {
    newfill.push(fill[12]);
    newfill.push(fill[4]);
    fill = newfill
  } else if (categories.length <= 10) {
    newfill.push(fill[1]);
    newfill.push(fill[5]);
    newfill.push(fill[8]);
    newfill.push(fill[11]);
    newfill.push(fill[12]);
    newfill.push(fill[13]);
    newfill.push(fill[14]);
    newfill.push(fill[16]);
    newfill.push(fill[17]);
    newfill.push(fill[18]);
    fill = newfill;
  } else if (categories.length <= 12) {
    newfill.push(fill[1]);
    newfill.push(fill[2]);
    newfill.push(fill[3]);
    newfill.push(fill[4]);
    newfill.push(fill[5]);
    newfill.push(fill[8]);
    newfill.push(fill[9]);
    newfill.push(fill[11]);
    newfill.push(fill[12]);
    newfill.push(fill[13]);
    newfill.push(fill[16]);
    newfill.push(fill[18]);
    fill = newfill;
  }

  // the elements of the chord diagram
  let g = svg.append("g").attr('class', 'circle').datum(chord(matrix));
  let group = g.selectAll(".groups").data(function(chords) {
    return chords.groups;
  }).enter().append('g').attr("class", "groups");

  group.append("path").style("fill", function(d, i) { // use color map
    return (d.index) >= gnames.length
      ? fill[d.index - gnames.length]
      : "#ccc";
  }).attr("d", arc).style("opacity", 0.9);

  g.selectAll('.ribbons').data(function(chords) {
    return chords;
  }).enter().append("path").attr("class", "ribbons").attr("d", ribbon).style("fill", function(d) {
    return fill[d.target.index - gnames.length]; // the first 30 eleemnts of d are the group names => need start indexing at 0
  }).style("opacity", 0.9);

  // label the arcs
  svg.selectAll(".text").data(chordgroups).enter().append("text").attr("class", "text").attr("text-anchor", function(d) {
    return d.angle > Math.PI
      ? "end"
      : null;
  }).attr("transform", function(d) {
    //rotate each label around the circle
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" + "translate(" + (outerRadius + 10) + ")" + (d.angle > Math.PI
      ? "rotate(180)"
      : "");

  }).text(function(d, i) {
    return clean_text(fc,i);

  }).attr("font-family", "Arial Black").attr("font-size", "11px").attr("fill", function(d, i) {
    return (d.index) >= gnames.length
      ? fill[d.index - gnames.length]
      : "#ccc";
  });

  svg.selectAll('.text').on('mouseover', function(d, i) {
    f_mouseover(d,i);
  })
  .on('mouseout', function(d,i) {
    f_mouseout(d,i);
  });

  svg.selectAll('.groups').on('mouseover', function(d, i) {
    f_mouseover(d,i);
  })
  .on('mouseout', function(d,i) {
    f_mouseout(d,i);
  });



  function f_mouseover(d,i) {
    /*
    show percentages of categories from target to source as tooltip
    and fade the unrelevant chords out
    */

    let names, values;
    // get the adjacency values from the matrix
    // and the names for the corresponding values
    if (0 <= i && i< gnames.length) {
      values = matrix[i].slice(gnames.length, matrix[i].length);
      names = fc.slice(gnames.length, matrix[i].length);
    }else {
    // all the values the ith element is connected to
      values = matrix[i].slice(0, gnames.length);
      names = fc.slice(0, gnames.length);
    }

    // obtain the 3 largest values
    let idx = getmax(values);
    let percentage1 = values[idx[0]]/d.value;
    let percentage2 = values[idx[1]]/d.value;

    let format = d3.format('.1f');
    // heading for the tooltip
    d3.select('#tt_heading').text(clean_text(fc, i));
    // insert the statistics for showing in the tooltip
    d3.select("#tooltip").select("#value1")
      .text(clean_text(names, idx[0]) + ': ' + format(percentage1*100));
    d3.select("#tooltip").select("#value2")
      .text(clean_text(names, idx[1])  + ': ' + format(percentage2*100));

    // if we have more than two sources we show the top 3, else only the top 2
    if (categories.length > 2 || i >=gnames.length) {
      let percentage3 = values[idx[2]]/d.value;
      document.getElementById('opt_value')
      .innerHTML = "<span>"+ clean_text(names, idx[2])  + ': ' + format(percentage3*100)+"</span>%";
    } else {
      document.getElementById('opt_value').innerHTML= '';
    }
    //Show the tooltip
    d3.select("#tooltip").classed("hidden", false);
    fade(d, i, 0.1);
  }

  function f_mouseout(d,i) {
    /*
      make tooltip disappear and chords reappear
    */
    d3.select('#tooltip').classed('hidden', true);
    fade(d, i, 0.9);
  }


  function fade(d, i, opacity) {
    /*
    fade function used when hovering over text or arc
    */
      svg.selectAll("path.ribbons").filter(function(d) {
        return d.source.index != i && d.target.index != i;
      }).transition().style("opacity", opacity);
  }

  function getmax(values) {
    /*
      get the indices of the 3 max values
    */
    let sorted = values.slice();
    sorted.sort((a,b) => b-a);
    let max3 = sorted.slice(0,3);
    let idx = [];
    idx.push(values.indexOf(max3[0]));
    idx.push(values.indexOf(max3[1]));
    idx.push(values.indexOf(max3[2]));
    return idx;
  }

  function clean_text(name_list, i) {
    /*
      truncate category names when necessary, make names more readable etc
    */
    let name = name_list[i];
    // very long parenthesis for this particular category name
    if (name.slice(0, 7) == 'Vehicle') {
      return name.slice(0, 7);
    }
    // for suicide and success paramters
    if (name == '0') {
      return 'No';
    } else if (name == '1') {
      return 'Yes';
    }
    // take parenthesis away that is present for the group names (abbreviations)
    let parenthesis = name.indexOf('(');
    if (parenthesis == -1 || i >= gnames.length) {
      return name;
    } else {
      return name.slice(0, parenthesis);
    }
  }
}


function dropdown_callback(type) {
  /*
  function handling the callback of the dropdown menu, responsible for creating new charts
  */
  // let infoSelect = document.getElementById("drop");
  // let selectedText = infoSelect.options[infoSelect.selectedIndex].text;
  target_type_series = [{name: 'Abortion Related', data: [[0.11764705882352941, 0.21568627450980393, 51.0]]}, {name: 'Airports & Aircraft', data: [[3.542372881355932, 3.1333333333333333, 344.0]]}, {name: 'Business', data: [[1.7667586968525677, 4.262354404613819, 8837.0]]}, {name: 'Educational Institution', data: [[0.9982882574460801, 2.8833333333333333, 2877.0]]}, {name: 'Food or Water Supply', data: [[1.0324675324675325, 1.1324503311258278, 151.0]]}, {name: 'Government (Diplomatic)', data: [[1.7147147147147148, 6.675696594427245, 1288.0]]}, {name: 'Government (General)', data: [[1.5445951500205508, 2.566094600251151, 11920.0]]}, {name: 'Journalists & Media', data: [[0.6441176470588236, 0.8576779026217228, 1333.0]]}, {name: 'Maritime', data: [[3.4285714285714284, 3.136, 124.0]]}, {name: 'Military', data: [[3.7344677935130197, 3.3426060606060606, 16411.0]]}, {name: 'NGO', data: [[1.2088607594936709, 0.9512195121951219, 613.0]]}, {name: 'Other', data: [[2.1415929203539825, 3.850467289719626, 107.0]]}, {name: 'Police', data: [[2.418877273551272, 3.240516595957075, 15989.0]]}, {name: 'Private Citizens & Property', data: [[3.332056322882011, 5.346389272193327, 28156.0]]}, {name: 'Religious Figures/Institutions', data: [[3.584219001610306, 6.774834437086093, 3016.0]]}, {name: 'Telecommunication', data: [[0.11703958691910499, 0.5034602076124568, 578.0]]}, {name: 'Terrorists/Non-State Militia', data: [[3.312866817155756, 3.4, 2100.0]]}, {name: 'Tourists', data: [[2.553763440860215, 5.440677966101695, 177.0]]}, {name: 'Transportation', data: [[2.202410383189122, 6.548834278512918, 3171.0]]}, {name: 'Unknown', data: [[0.48808104886769965, 0.29635530770762797, 5013.0]]}, {name: 'Utilities', data: [[0.48915355168013613, 0.34587116299178555, 2313.0]]}, {name: 'Violent Political Party', data: [[1.3333333333333333, 2.1679035250463823, 1075.0]]}]
  attack_type_series = [{name: 'Armed Assault', data: [[3.281659719590754, 1.9995978767894482, 24799.0]]}, {name: 'Assassination', data: [[1.253456878118318, 1.298900462962963, 6909.0]]}, {name: 'Bombing/Explosion', data: [[2.2047019027484143, 5.182055538264689, 57772.0]]}, {name: 'Facility/Infrastructure Attack', data: [[0.3819854217285665, 0.41753949937866147, 5631.0]]}, {name: 'Hijacking', data: [[11.621428571428572, 60.956043956043956, 271.0]]}, {name: 'Hostage Taking (Barricade Incident)', data: [[9.946175637393768, 10.673015873015872, 313.0]]}, {name: 'Hostage Taking (Kidnapping)', data: [[3.647586431833007, 1.0685724307260611, 5581.0]]}, {name: 'Unarmed Assault', data: [[0.9893129770992366, 9.276559865092748, 592.0]]}, {name: 'Unknown', data: [[5.2052016225244575, 2.411410625490709, 3776.0]]}]
  weapon_type_series = [{name: 'Biological', data: [[0.34615384615384615, 1.125, 24.0]]}, {name: 'Chemical', data: [[2.2666666666666666, 30.95813953488372, 215.0]]}, {name: 'Explosives', data: [[2.376701558206395, 5.11087961455824, 61367.0]]}, {name: 'Fake Weapons', data: [[0.08333333333333333, 0.0, 12.0]]}, {name: 'Firearms', data: [[2.8115668709728117, 1.5481233865095652, 30066.0]]}, {name: 'Incendiary', data: [[0.7115745960165352, 0.6671198290930278, 5143.0]]}, {name: 'Melee', data: [[2.317808219178082, 1.4041425818882467, 2059.0]]}, {name: 'Other', data: [[1.2891566265060241, 0.8, 80.0]]}, {name: 'Radiological', data: [[0.18181818181818182, 0.36363636363636365, 11.0]]}, {name: 'Sabotage Equipment', data: [[0.49056603773584906, 1.5339805825242718, 103.0]]}, {name: 'Unknown', data: [[3.943671963677639, 1.6095019157088122, 6458.0]]}, {name: 'Vehicle', data: [[28.944444444444443, 160.73584905660377, 106.0]]}]
  region_type_series = [{name: 'Australasia & Oceania', data: [[0.25, 0.6296296296296297, 81.0]]}, {name: 'Central America & Caribbean', data: [[1.0816326530612246, 1.8210526315789475, 95.0]]}, {name: 'Central Asia', data: [[1.0872727272727272, 2.4907749077490773, 270.0]]}, {name: 'East Asia', data: [[4.458536585365854, 7.515151515151516, 198.0]]}, {name: 'Eastern Europe', data: [[1.563411078717201, 2.7181457610312343, 4022.0]]}, {name: 'Middle East & North Africa', data: [[2.978969216534547, 4.876390860978443, 38631.0]]}, {name: 'North America', data: [[4.776725304465494, 25.429155313351497, 734.0]]}, {name: 'South America', data: [[1.509877003354454, 2.0288683602771362, 2591.0]]}, {name: 'South Asia', data: [[2.0911168548496804, 3.0768266874582313, 35846.0]]}, {name: 'Southeast Asia', data: [[0.8756666318101014, 1.9250585480093676, 9380.0]]}, {name: 'Sub-Saharan Africa', data: [[4.971912013536379, 3.903796001159084, 10250.0]]}, {name: 'Western Europe', data: [[0.29697986577181207, 1.8037225042301184, 3546.0]]}]
  let diagram = document.getElementById('chordDiagram');
  diagram.innerHTML = '';
  data_series = []
  if (type === 'Weapon type') {
    d3.csv('./data/adjacency/adj_gname_weapon.csv', createChordDiagram);
    data_series = weapon_type_series
  } else if (type === 'Attack type') {
    d3.csv('./data/adjacency/adj_gname_attacktype.csv', createChordDiagram);
    data_series = attack_type_series
  } else if (type === 'Target type') {
    d3.csv('./data/adjacency/adj_gname_targtype.csv', createChordDiagram);
    data_series = target_type_series
  } else if (type === 'Attack region') {
    d3.csv('./data/adjacency/adj_gname_region.csv', createChordDiagram);
    data_series = region_type_series
  }
  // } else if (type === 'Suicide attacks') {
  //   d3.csv('./data/adjacency/adj_gname_suicide.csv', createChordDiagram);
  // } else if (type === 'Successfull attacks') {
  //   d3.csv('./data/adjacency/adj_gname_success.csv', createChordDiagram);
  // }

if (data_series != null){
  Highcharts.chart('container', {
        chart: {
          type: 'bubble',
          zoomType: 'xy',
          backgroundColor: {
          linearGradient: [0, 0, 400, 500],
          stops: [
              [0, 'rgb(255,255,255)'],
              [1, 'rgb(239,239,239)']
          ]
      },
        },
        title: {
          text: 'Bubble chart of the impact of terrorist attacks on different '+ type
        },
        series: data_series,
  });
}
}
