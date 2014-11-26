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
    }
  }
  
  SimpleCSV.set_valid_columns();
})