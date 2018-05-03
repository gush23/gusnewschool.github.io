// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Smartphone', 3.5],
          ['Tablet', 2],
          ['Home Computer', 2],
          ['Smart Watch', 1],
          ['Laptop', 2.5]
        ]);

        // Set chart options
        var options = {'title':'Which Do People Use Most Everyday',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

      var ctx = document.getElementById('myChart');

var data = {
  labels: ['Red', 'Gray', 'White'],
  datasets: [
  {
    data: [300,50,100]
    backgroundColor: ['#AE0E0E', '#44444B', '#DAD1D1'],
    hoverBackgroundColor: ['red' 'gray', 'white' ]
  }
] // datasets
}; // json object that holds our data