var kabinet = document.getElementById("kabinet");
var kabinetValue = kabinet.options[kabinet.selectedIndex].value;

var grafikkot = document.getElementById("grafikkot");
var grafikkotValue = grafikkot.options[grafikkot.selectedIndex].value;

var ram = document.getElementById("ram");
var ramValue = ram.options[ram.selectedIndex].value;

var cpu = document.getElementById("cpu");
var cpuValue = cpu.options[cpu.selectedIndex].value;

var psu = document.getElementById("psu");
var psuValue = psu.options[psu.selectedIndex].value;

var bundkort = document.getElementById("bundkort");
var bundkortValue = bundkort.options[bundkort.selectedIndex].value;

var kolings = document.getElementById("kolings");
var kolingsValue = kolings.options[kolings.selectedIndex].value;

var software = document.getElementById("software");
var softwareValue = software.options[software.selectedIndex].value;

var total =
  kabinetValue +
  grafikkotValue +
  ramValue +
  cpuValue +
  psuValue +
  bundkortValue +
  kolingsValue +
  softwareValue;

  document.getElementById("tota") = total