$(function(){
  window.SimpleCSV = {
  
    set_valid_columns: function(){
      var pc = this._pc = []
      $('.permitted-col').each(function(i, node){
        pc.push($(node).text())
      })
    },
  
    valid_columns: function(){
      return this._pc
    },
    
    set_dobj: function(selection){
      this._dobj = selection;
    },
    
    dobj: function(){
      return this._dobj;
    },
    
    revise_header: function(new_header, old_header){
      this.dobj().forEach( function(o){
        o[new_header] = o[old_header]
      })
    },
    
    submit: function(url, action){
      var data = { simpleCSVdata: this.dobj() }
      $.ajax({
        type: action,
        url: url,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        dataType: "json"
      })
    },
    
    //maybe clean data before submitting by removing unusable columns
    delete_column: function(column_header) {
      this.dobj().forEach( function(o){
        delete o[column_header];
      })
    }
  }
  
  SimpleCSV.set_valid_columns();
})