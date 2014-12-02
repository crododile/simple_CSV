module SimpleCsvHelper
      
  def simple_csv_for(path, permitted_columns=[], collection_columns=[])
    html = <<-HERE
    <div id="valid_columns_bank">
    HERE
    permitted_columns.each do |col|
      html << "<p draggable='true' class='permitted-col'>#{col}</p>"
    end
    collection_columns.each do |col|
      html << "<p draggable='true' class='collection-col' data-collection='true'>#{col}</p>"
    end
    html << <<-THERE
    </div>
    <button id='submit-simple-csv' data-url='#{path}'>SUBMIT</button>
    <input type="file" id="files" name="files[]" multiple />
    <table id='receiver'></table>
    THERE
    html.html_safe
  end
  
end