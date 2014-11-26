module SimpleCsvHelper
    
  def simple_csv_for(permitted_columns)
    html = <<-HERE
    <div id="valid_columns_bank">
    Columns with red headers will not be uploaded,
    Columns with green headers will.<br>
    To account for slight differences in spelling, match the options below to your columns for an accurate upload
    HERE
    permitted_columns.each do |col|
      html << "<p draggable='true' class='permitted-col'>#{col}</p>"
    end
    html << <<-THERE
    </div>
    <button id='submit-simple-csv'>SUBMIT</button>
    <input type="file" id="files" name="files[]" multiple />
    <table id='receiver'></table>
    THERE
    
    html.html_safe
  end
  
end