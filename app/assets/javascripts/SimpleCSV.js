$(function(){
  window.SimpleCSV = {
  
    set_valid_columns: function(){
      var pc = this._pc = []
      $('.permitted-col').each(function(i, node){
        pc.push($(node).text())
      })
      //will add collection columns when they are dragged in
    },
    
    add_valid_column: function(header){
      this.valid_columns().push(header)
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
      this.add_valid_column(new_header)
    },
    
    matching_subset: function(obj, props) {
        var ret = {};
        for(var i = 0, l = props.length; i < l; i++) {
            var prop = props[i];
            if(obj.hasOwnProperty(prop)) {
                ret[prop] = obj[prop];
            }
        }
        return ret;
    },
    
    submit: function(url, action){
      var data = { simpleCSVdata: this.reject_invalid_columns(this.dobj()) }
      $.ajax({
        type: action,
        url: url,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        context: $("#submit-simple-csv"),
        dataType: "json",
        complete: function(response){
          console.log(response)
          alert(response.responseText)
        }
      })
    },
    
    reject_invalid_columns: function(){
      //this is run when creating json for submitting
      var valid_group = []
      var vcols = this.valid_columns();
      this.dobj().forEach(function(o){
        valid_group.push(SimpleCSV.matching_subset(o, vcols))
      })
      return valid_group
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