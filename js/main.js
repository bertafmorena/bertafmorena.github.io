jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // python Chart
  var doughnutData = [{
      value: 85,
      color: "#1abc9c"
    },
    {
      value: 15,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("python").getContext("2d")).Doughnut(doughnutData);

  // matlab Chart
  var doughnutData = [{
    value: 90,
    color: "#1abc9c"
  },
  {
    value: 10,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("matlab").getContext("2d")).Doughnut(doughnutData);

  // C/C++ Chart
  var doughnutData = [{
    value: 65,
    color: "#1abc9c"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("matlab").getContext("2d")).Doughnut(doughnutData);

  // sql Chart
  var doughnutData = [{
    value: 65,
    color: "#1abc9c"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("c++").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 40,
    color: "#1abc9c"
  },
  {
    value: 60,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // java Chart
  var doughnutData = [{
    value: 50,
    color: "#1abc9c"
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);

  // Illustrator Chart
  var doughnutData = [{
    value: 50,
    color: "#1abc9c"
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);
});
