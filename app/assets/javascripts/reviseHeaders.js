// name this file browser events
$(function(){
  var dragged_data
  
  $('#valid_columns_bank').on('dragstart', 'p.permitted-col', function(e){
    dragged_data = $(event.target);
  });
  
  $('#valid_columns_bank').on('dragstart', 'p.collection-col', function(e){
    dragged_data = $(event.target);
  });

  $('table').on('dragover', 'th', function(e){
    e.preventDefault();
  });

  $('table').on('drop', 'th', function(e){
    e.preventDefault();
    var newHeader;
    if(dragged_data.hasClass("collection-col")) {
      newHeader = dragged_data.data('attr') + "_" + String(SimpleCSV.inc_and_get_collection_counter(dragged_data.data('attr')));
    } else {
      newHeader = dragged_data.data('attr');
    }
    var oldHeader = $(e.target).text();
    $(e.target).text(dragged_data.text());
    $(e.target).addClass('valid');
    
    SimpleCSV.revise_header(newHeader, oldHeader);
  });
  
  $('#submit-simple-csv').on('click', function(e){
    e.preventDefault();
    SimpleCSV.submit($(e.target).data()['url'], 'POST');
  });
  
})
