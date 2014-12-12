This gem exists to ease the pain of spreadsheet imports to your DB
from sources that may have different naming conventions than your App.

##Simple Usage
Include simple_CSV javascripts ( sort of the heart of the gem ) in the asset pipeline with
<code>//= require simple_CSV</code>
Include stylesheets with ( ultimately optional, but use them when getting started )
<code> *= require simple_csv </code>

Simple CSV provides a view helper which is used as follows:
<code>
  ### your_import_page.html.erb
  <%= simple_csv_for( path_to_process_imports, array_of_desired_attributes )%>
</code>

The helper generates html which will accept a csv import and parse it into an array of JSON
based on the CSV headers ( using d3.js and html5 filereader API ). It then generates
an html table using the JSON. The helper also generates draggable 'material' from the 
array_of_desired_attributes. Drag and drop these into the headers on the generated table to
reassign the attribute keys on all of your data. 

Pressing SUBMIT sends the modified data to path_to_process_imports, where it is available in
params as simpleCSVdata. Access through 
<code>
  ### params.permit(SimpleCSVdata: #{array_of_desired_attributes})
  ### eg.
  params.permit(SimpleCSVdata: [:first_name, :last_name, :phone_number])
</code>

##( Slightly ) Advanced Usage
If your data contains associated records, the helper takes a third argument
<code>
<%= simple_csv_for(import_posts_url, ['first_name', 'last_name'], ['pets', 'fish'])%>
</code>

Pets and fish will generate draggable material that will update headers with an ever
incrementing counter appended ( i.e. fish_1, fish_2, fish_3 ). These are available
in post params under their new headers. 

####n.b.
Packaging the collection attributes in an appropriately named array (i.e. fish_attributes)
would be interesting and cool. it would involve a similar parsing of the internals of 
the contents of those cells 

###Contributing
Adding the ability to parse excel files would be pretty amazing.



## Installation

Add this line to your application's Gemfile:

gem 'simple_CSV', github: "metova/simple_CSV"

