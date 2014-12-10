describe("SimpleCSV", function() {
  
  beforeEach(function(){
    loadFixtures('import-page.html');
    testDobj = [
      { fname: 'bill',
        lname:'billson',
        dog:'blaze',
        cat:'gizmo'},
      { fname: 'test',
        lname:'testerson',
        dog:'airbud',
        cat:'gixmo'}
      ]
      console.log(testDobj);
  });
  
  afterEach(function(){
    testDobj = [
      { fname: 'bill',
        lname:'billson',
        dog:'blaze',
        cat:'gizmo'},
      { fname: 'test',
        lname:'testerson',
        dog:'airbud',
        cat:'gixmo'}
      ]
  });
  
  it("gets and sets permitted columns", function() {
    SimpleCSV.set_valid_columns();
    expect(SimpleCSV.valid_columns()).toEqual(['first_name','last_name']);
  });
  
  it("gets and sets the json data array ( called dobj )", function(){
    SimpleCSV.set_dobj(testDobj);
    expect(SimpleCSV.dobj()).toEqual(testDobj);
  });
  
  it("revises keys", function(){
    SimpleCSV.revise_header('first_name', 'fname');
    expect(SimpleCSV.dobj()).toEqual(
      [{ first_name: 'bill',
         lname:'billson',
         dog:'blaze',
         cat:'gizmo'
        },
        { first_name: 'test',
         lname:'testerson',
         dog:'airbud',
         cat:'gixmo'
        }]
    )
  });
  
  it('gets and increments collection counter', function(){
    expect(SimpleCSV.get_collection_counter('pets')).toEqual(0);
    SimpleCSV.inc_collection_counter('pets')
    expect(SimpleCSV.get_collection_counter('pets')).toEqual(1);
    expect(SimpleCSV.inc_and_get_collection_counter('pets')).toEqual(2);
  });
  
  it("deletes a column", function(){
    SimpleCSV.set_dobj(testDobj);
    SimpleCSV.delete_column('cat')
    expect(SimpleCSV.dobj()).toEqual(
      [{ fname: 'bill',
         lname:'billson',
         dog:'blaze'
        },
        { fname: 'test',
          lname:'testerson',
          dog:'airbud'
        }]
    )
  })
  it("rejects invalid columns ( currently responsibility of rails strong params)",
     function(){})
  
  
  
});