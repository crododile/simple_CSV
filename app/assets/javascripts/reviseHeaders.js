$(function(){
  var dragged_data
  
  $('#valid_columns_bank').on('dragstart', 'p.permitted-col', function(e){
    dragged_data = $(event.target).text();
  });

  $('table').on('dragover', 'th', function(e){
    e.preventDefault();
  });

  $('table').on('drop', 'th', function(e){
    e.preventDefault();
    var past_text = $(e.target).text();
    $(e.target).text(dragged_data);
    
    SimpleCSV.revise_header(dragged_data, past_text)
  });
  
  $('#submit-simple-csv').on('click', function(e){
    e.preventDefault();
    SimpleCSV.submit($(e.target).data()['url'], 'POST');
  })
  
})