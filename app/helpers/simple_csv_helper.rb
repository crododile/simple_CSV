module SimpleCsvHelper
      
  def simple_csv_for(path, permitted_columns=[], collection_columns=[])
    render partial: 'simple_CSV/main', locals: {path: path, permitted_columns: permitted_columns, collection_columns: collection_columns}
  end  
end
