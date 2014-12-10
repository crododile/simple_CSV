$(function(){
  window.SimpleCSV = {
  
    set_valid_columns: function(){
      var pc = this._pc = []
      $('.permitted-col').each(function(i, node){
        pc.push($(node).text())
      })
      //will add collection columns when they are dragged in
    },
    
    inc_collection_counter: function(col_name){
      this["_"+col_name+"_count"] = this["_"+col_name+"_count"] || 0
      this["_"+col_name+"_count"]++
    },
    
    inc_and_get_collection_counter: function(col_name){
      this.inc_collection_counter(col_name);
      return this.get_collection_counter(col_name);
    },
    
    get_collection_counter: function(col_name){
      return this["_"+col_name+"_count"] = this["_"+col_name+"_count"] || 0
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
        o[new_header] = o[old_header];
        delete o[old_header];
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
    
    reject_invalid_columns: function(){
      this.dobj().forEach(function(o){
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