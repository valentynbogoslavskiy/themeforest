/* Add here all your JS customizations */

(function($) {

  'use strict';

  var datatableInit = function() {

    $('.datatable-default').dataTable({
      dom: '<"row"<"col-lg-6"l><"col-lg-6"f>><"table-responsive"t>p',
      aaSorting: [[0, 'desc']]
    });

  };

  $(function() {
    datatableInit();
  });

}).apply(this, [jQuery]);

$( document ).ready(function() {

  //

});
