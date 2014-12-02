$(function(){
  
  function dataToTable(d, i){
    d3.select(this)
      .selectAll('td')
      .data( Object.keys(d) )
      .enter()
      .append('td')
      .attr('id', function(dt, ix){'csv-data-' + d + ix })
      .text(function(dt, ix){
        return d[dt];
      })
  }

  function handleFileSelect(evt) {
    var files = evt.target.files;
    var reader = new FileReader();
    
    reader.onload = function(e){
      dstr = e.target.result;
      dobj = d3.csv.parse(dstr);
      
      SimpleCSV.set_dobj( dobj );
      
      rcv = d3.select('#receiver')
      rcv.selectAll('th').data(Object.keys(SimpleCSV.dobj()[0]))
        .enter()
        .append('th')
        .classed('valid', function(d, i){
          return SimpleCSV.valid_columns().indexOf(d) != -1; 
        })
        .text(function(d, i){
          return d;
        });
        
      // Object.keys(dobj[0])
      rcv.selectAll('tr').data(dobj)
        .enter()
        .append('tr')
        .attr('id', function(d,i){ return "csv-"+ i })
       rcv.selectAll('tr').data(dobj)
         .each( dataToTable )
    }
    //reader.onload called when reading completed
    reader.readAsText(files[0])
  }

  $('#files').on('change', handleFileSelect);
});