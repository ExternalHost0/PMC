// ==UserScript==
// @name         PimpMyCanvas
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @downloadURL  https://github.com/ExternalHost0/PimpMyCanvas/raw/master/PimpMyCanvas.user.js
// @description  Changes the color of Canvas LMS
// @author       External Host
// @match        https://*.instructure.com/*
// @icon         https://i.postimg.cc/7hJpHcMQ/canvas2.png
// @supportURL   https://github.com/ExternalHost0/PimpMyCanvas/issues
// @require      http://code.jquery.com/jquery-latest.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==


(function() {
  'use strict';

  const defaultColors = {
      backgroundColor: "#faebd7",
      sideColor: "#ff6536",
      sideColorGradient: "linear-gradient(0deg, #ff5024, #e0d4a6, #f57e42)",
      minorsideColor: "#d43809",
      newNotifColor: "#ffae0d",
      dangerColor: "#ff0d41",
      textColor: "#03081f",
      minortextColor: "#1c1b26",
      buttonbackColor: "#ffffff",
      secondarybackgroundColor: "#f7c88b",
      tertiarybackgroundColor: "#faf0e3",
      hoverColor: "#fa9a1e",
      iconColor: "#ffffff",
      slimborderfixColor: "#c7cdd1",
  }
  
  let colors = GM_getValue('colors', defaultColors)

  if (GM_getValue("sT", "Switch to Gradient") == "Switch to Gradient") {
      document.documentElement.style.setProperty('--sideColor', colors.sideColor);
  } else {
      document.documentElement.style.setProperty('--sideColor', colors.sideColorGradient);
  }

  GM_addStyle(/*css*/`
  /* I change like sixty global variables */
  :root{
      --backgroundColor: ${colors.backgroundColor};
      --sideColor: ${colors.sideColor};
      /*--sideColorGradient: ${colors.sideColorGradient}; not needed, as we are replacing --sideColor */ 
      --minorsideColor: ${colors.minorsideColor}; 
      --newNotifColor: ${colors.newNotifColor}; 
      --dangerColor: ${colors.dangerColor};
      --textColor: ${colors.textColor};
      --minortextColor: ${colors.minortextColor};
      --buttonbackColor: ${colors.buttonbackColor};
      --secondarybackgroundColor: ${colors.secondarybackgroundColor};
      --tertiarybackgroundColor: ${colors.tertiarybackgroundColor};
      --hoverColor: ${colors.hoverColor};
      --iconColor: ${colors.iconColor};
      --slimborderfixColor: ${colors.slimborderfixColor};

      --eqmZq-selectedBackground: var(--secondarybackgroundColor) !important;
      --qBMHb-focusOutlineColor: var(--minorsideColor) !important;
      --MlJlv-toggleFocusBorderColor: var(--minorsideColor) !important;
      --fdyuz-background: var(--tertiarybackgroundColor) !important;
      --eHzxc-background: var(--secondarybackgroundColor) !important;
      --sJGfW-activeBackground: var(--hoverColor) !important;
      --eMdva-infoBorderColor: var(--hoverColor) !important;
      --eMdva-infoIconBackground: var(--hoverColor) !important;
      --eHQDY-color: var(--minorsideColor) !important;
      --cMptf-courseColor: var(--minorsideColor) !important;
      --cAqHo-focusBorderColor: var(--minorsideColor) !important;
      --fOyUs-focusColorInfo: var(--minorsideColor) !important;
      --bDBte-titleBackground: var(--buttonbackColor) !important; /* dashboard class name backgrounds */
      --cAqHo-background: var(--backgroundColor) !important;
      --erWSf-background: var(--backgroundColor) !important;
      --ccWIh-background: var(--backgroundColor) !important;
      --eAJaG-background: var(--backgroundColor) !important;
      --dpCPB-background: var(--backgroundColor) !important;
      --fwfoD-background: var(--backgroundColor) !important;
      --dCppM-defaultBackground: var(--backgroundColor) !important;
      --fOyUs-backgroundPrimary: var(--backgroundColor) !important;
      --fLzZc-background: var(--backgroundColor) !important;
      --pFBbo-color: var(--minortextColor) !important; /* dashboard dates text */
      --fOyUs-borderColorBrand: var(--minortextColor) !important;
      --fOyUs-backgroundBrand: 0 !important;
      --dUOHu-primaryInverseColor: var(--minortextColor) !important;
      --enRcg-primaryInverseColor: var(--minortextColor) !important;
      --enRcg-brandColor: var(--minortextColor) !important;
      --sJGfW-activeLabelColor: var(--buttonbackColor) !important;
      --sJGfW-activeIconColor: var(--buttonbackColor) !important;
      --dUOHu-brandColor: var(--minortextColor) !important; /* honestly no idea but the submit page on assignments is all weird cause of it for several stuff */
      --ic-brand-primary: var(--sideColor); /* hover on grades page */
      --ic-brand-global-nav-menu-item__badge-text: var(--iconColor);
      --ic-brand-global-nav-ic-icon-svg-fill: var(--iconColor);
      --ic-brand-global-nav-menu-item__text-color: var(--iconColor);
      --feqxT-backgroundHover: var(--hoverColor) !important;
      --ic-link-color-darkened-10: var(--minorsideColor) !important;
      --fQfxa-primaryBorderColor: var(--hoverColor) !important;
      --fQfxa-secondaryBorderColor: var(--hoverColor) !important;
      --fQfxa-primaryColor: var(--buttonbackColor) !important;
      --fQfxa-secondaryColor: var(--minortextColor) !important;
      --fQfxa-primaryHoverBackground: var(--hoverColor) !important;
      --fQfxa-primaryInverseBackground: var(--buttonbackColor) !important; /* so far its the Today button on dashboard */
      --fQfxa-secondaryBackground: var(--buttonbackColor) !important; /* the background color of secondary buttons */
      --qBMHb-background: var(--buttonbackColor) !important; /* the background color of a button */
      --fbyHH-color: var(--textColor) !important; /* global text for assignments */
      --fbyHH-hoverColor: var(--minorsideColor) !important; /* keeps text from changing colors when hoverd */
      --ic-brand-global-nav-logo-bgd: 0 !important; /* color behind the custom school/organizations logo */
      --cECYn-colorPrimary: var(--newNotifColor) !important; /* notification # corner */
      --feqxT-background: var(--minorsideColor) !important; /* new activity button */
      --cECYn-colorDanger: var(--dangerColor) !important; /* danger/late */
      --dLyYq-dangerColor: var(--dangerColor) !important;
      --dLyYq-infoColor: var(--newNotifColor) !important; /*late on grades page*/
      --pFBbo-background: 0 !important;
      --voGQb-background: 0 !important;
      --ic-brand-global-nav-ic-icon-svg-fill--active: var(--textColor) !important; /* sidebar icons when selected */
      --fQfxa-secondaryGhostColor: var(--textColor) !important; /* icons on dashboard top left */
      --ic-link-color: var(--textColor) !important; /* sidebar text below icons when selected */

  }

  body {
      transition: ease-in-out 300ms;
      background: var(--backgroundColor)
  }

  .ic-app-header { /* SIDEBAR */
      animation: gradient 10s ease infinite;
      background: var(--sideColor);
      background-size: 100% 500%;
      transition: ease-in-out 300ms;
  }
  .navigation-tray-container, .header-bar, .ic-app-nav-toggle-and-crumbs, #breadcrumbs, .assignment-student-header {
      background: var(--backgroundColor);
      transition: ease-in-out 300ms;
  }
  .large.ic-Dashboard-header__layout, .react-rubric td, .react-rubric th {
      background: var(--backgroundColor);
      opacity: 0.95;
      transition: ease-in-out 300ms;
  }
  .PlannerHeader-styles__root.PlannerHeader, #minical, .module-sequence-footer .module-sequence-footer-content, .file-upload-submission, #questions.assessing, #calendar-app .fc-month-view .fc-body, #calendar-drag-and-drop-container .fc-month-view .fc-body, #calendar-list-holder, #other-calendars-list-holder, #undated-events, table.summary td, table.summary tbody th, .Day-styles__root, .item-group-container, .dialog_opener.Button.Button--link {
      background: 0;
  }
  #calendar-app .fc-month-view .fc-today, #calendar-drag-and-drop-container .fc-month-view .fc-today, .item-group-condensed .ig-header, #questions.assessment_results .question .header, .conversations .panel, .question .header, .ic-notification__icon, .ic-Action-header .ic-Action-header__Secondary>.Button, .ic-Action-header .ic-Action-header__Secondary>.btn, .ic-Action-header .ic-Action-header__Secondary>.ui-button{
      background: var(--secondarybackgroundColor) !important;
      transition: ease-in-out 300ms;
  }
  .group_user_8655, .group_user_8655:hover, .group_user_8655:focus {
      background-color: var(--hoverColor) !important;
  }
  #minical .fc-widget-content {
      border: 1px solid transparent;
  }
  #assignments-student-footer, .submission-details-comments .comments {
      background: var(--backgroundColor) !important;
      transition: ease-in-out 300ms;
  }
  .btn, .ui-button, #right-side .button-sidebar-wide, select {
      background: var(--buttonbackColor);
      transition: ease-in-out 300ms;
  }
  p span, h2 span, table span, .user_content a:not(.btn):not(.Button):not(.ui-button):not([role=button]), .mceContentBody a:not(.btn):not(.Button):not(.ui-button):not([role=button]){
      background: 0 !important; /* text on the home page */
  }
  #right-side .events_list .event-details:after, #right-side .events_list .todo-details:after, #right-side .to-do-list .event-details:after, #right-side .to-do-list .todo-details:after {
      background: var(--hoverColor);
      transition: ease-in-out 300ms;
  }
  .fOyUs_fKyb { /* immersive reader button */
      background: var(--backgroundColor);
      transition: ease-in-out 300ms;
  }
  #right-side .button-sidebar-wide:hover {
      background: var(--hoverColor);
      transition: ease-in-out 300ms;
  }
  .item-group-condensed .ig-row, .question .text {
      background: var(--tertiarybackgroundColor);
  }
  .ig-list .ig-row:hover, .btn-primary {
      background: var(--hoverColor);
      border-color: var(--textColor);
  }
  .list-view>ul>li>a:hover, .list-view>nav>ul>li>a:hover, .list-view>div>nav>ul>li>a:hover {
      color: var(--hoverColor);
  }
  .menu-item__badge, .nav-badge {
      background: var(--newNotifColor) !important;
  }
  .fQfxa_caGd.fQfxa_ImeN, [dir="ltr"] .fQfxa_caGd.fQfxa_ImeN, [dir="rtl"] .fQfxa_caGd.fQfxa_ImeN {
      background: var(--secondarybackgroundColor);
      border-color: var(--sideColor);
  }
  .XOwIb_ddES[aria-selected]::after {
      background: var(--hoverColor) !important;
  }
  .quiz-submission, .question_editing {
      background: 0;
      border: 0;
  }
  .ViewerControls, .AnnotationControlButton, .Button--primary {
      background: var(--minorsideColor) !important;
  }
  .AnnotationControlButton-outer {
      border: 0;
  }
  .ic-app-header__menu-list-link .ic-icon-svg {
      transition: ease-in-out 300ms;
  }
  .react-rubric td, .react-rubric th, .react-rubric .rating-tier, .assignment-student-header, .ic-app-nav-toggle-and-crumbs {
      border-color: var(--slimborderfixColor) !important;
  }
  path[fill="#67C1F0"]{
      fill: var(--secondarybackgroundColor);
      transition: ease-in-out 300ms;
  }
  path[fill="#9BE1A4"]{
      fill: var(--hoverColor);
      transition: ease-in-out 300ms;
  }
  
  /* sidebar gradient background animation */
  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  #pmcdiv {
      position: relative;
      width: 100%;
      margin-bottom: 0.7rem;
  }
  #pmcinput {
      inset-inline: 0px auto;
      opacity: 0.0001;
      padding: 0px;
      position: absolute;
      top: 0px;
  }
  #pmcspan {
      --faJyW-background: #2D3B45;
      --faJyW-borderColor: #2D3B45;
      --faJyW-checkedBackground: #127A1B;
      --faJyW-checkedIconColor: #127A1B;
      --faJyW-focusOutlineColor: #0770A3;
  }
  .pmcControls {
      margin: 15px 0;
      display: flex;
      justify-content: space-between;
  }

  .pmcSettingsInput {
    margin-bottom: 10px;
  }

  #pmcControlText {
      font-size: 1rem;
      text-rendering: optimizeLegibility;
      margin: 5px 0;
      line-height: 1.5;
      font-family: var(--fOyUs-fontFamily);
  }
  .ColorSelector{
      width: 50px;
      height: 30px !important;
      padding: 1px 3px !important;
      display: inline;
  }
  .sp-replacer{
      float: right;
      transform: translateY(-6px);
  }
  #pmcGradientSwitch {
      height: 33px;
      padding: 6px 2.8px;
      animation: gradient 5s ease infinite;
      transition: ease-in-out 300ms;
      background: var(--sideColor);
      border: 0;
      justify-content: center;
      align-content: center;
      border-radius: 13px;
      background-size: 100% 1000%;
  } 
  #pmcGradientText {
      color: var(--textColor);
      padding: 6.5px;
      background: var(--backgroundColor);
      border-radius: 10px;
      transition: ease-in-out 300ms;

  }
  #pmcGradientText:hover {
      background: none;
      color: var(--iconColor);
  }
  #customGradientdiv {
      display: flex;
      align-items: stretch;
  }
  #customGradient {
      margin-bottom: 0;
  }
  #customGradButton {
      margin-left: 8px;
  }


  `)
   // Most elements remove their background entirely, so changing the document background reduces the amount of changes needed.

  // Checks every 500ms if tray is opened
  setInterval(() => {
      if ($('.tray-with-space-for-global-nav > div').length) {
          if (!$('.tray-with-space-for-global-nav #pmcdiv').length) {
              // PMC Show Button
              $('<div id="pmcdiv"/>').appendTo('.tray-with-space-for-global-nav > div');
              $('<div id="pmcControldiv"/>').appendTo('.tray-with-space-for-global-nav > div');
              $('<input id="pmcinput" type="checkbox" class="epRMX_cwos" value >').appendTo('#pmcdiv');
              $('<span class="faJyW_bGBk" id="pmcspan">').appendTo('#pmcdiv');
              $('<span id="pmccheck" class="faJyW_cSXm faJyW_bYta faJyW_doqw" aria-hidden="true"><span class="faJyW_dnnz"><span class="faJyW_cMpH"><svg name="IconX" viewBox="0 0 1920 1920" rotate="0" width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false" class="dUOHu_bGBk dUOHu_drOs dUOHu_eXrk cGqzL_bGBk faJyW_eoCh" style="width: 1em; height: 1em;"><g role="presentation"><path class="innerappend" d="M797.319865 985.881673L344.771525 1438.43001 533.333333 1626.99182 985.881673 1174.44348 1438.43001 1626.99182 1626.99182 1438.43001 1174.44348 985.881673 1626.99182 533.333333 1438.43001 344.771525 985.881673 797.319865 533.333333 344.771525 344.771525 533.333333z" fill-rule="nonzero" stroke="none" stroke-width="1"></path></g></svg></span></span></span>').appendTo('#pmcspan');
              $('<span id="pmctext">Show PMC Menu</span>').appendTo('#pmcspan');

              $('<hr>').appendTo('#pmcControldiv');
              // PMC Controls
              $('<div id="pmcControlBackgroundColor" class="pmcControls"/>').appendTo('#pmcControldiv');
              $('<span id="pmcControlText">Background Color</span>').appendTo('#pmcControlBackgroundColor');
              $(`<input type="color" value="${colors.backgroundColor}" id="backgroundColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlBackgroundColor');

              $('<div id="pmcControlSidebarColor" class="pmcControls"/>').appendTo('#pmcControldiv');
              $('<span id="pmcControlText">Sidebar Color</span>').appendTo('#pmcControlSidebarColor');
              $(`<input type="color" value=${colors.sideColor} id="sideColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlSidebarColor');

              $('<div id="pmcControlMinorSideColor" class="pmcControls"/>').appendTo('#pmcControldiv');
              $('<span id="pmcControlText">Accent Side Color</span>').appendTo('#pmcControlMinorSideColor');
              $(`<input type="color" value="${colors.minorsideColor}" id="minorsideColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlMinorSideColor');

              $('<div id="pmcControlTextColor" class="pmcControls"/>').appendTo('#pmcControldiv');
              $('<span id="pmcControlText">Text Color</span>').appendTo('#pmcControlTextColor');
              $(`<input type="color" value="${colors.textColor}" id="textColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlTextColor');

              $('<div id="pmcControlAccentTextColor" class="pmcControls"/>').appendTo('#pmcControldiv');
              $('<span id="pmcControlText">Accent Text Color</span>').appendTo('#pmcControlAccentTextColor');
              $(`<input type="color" value="${colors.minortextColor}" id="accenttextColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlAccentTextColor');

              $('<div id="pmcControlIconColor" class="pmcControls"/>').appendTo('#pmcControldiv');
              $('<span id="pmcControlText">Icon Color</span>').appendTo('#pmcControlIconColor');
              $(`<input type="color" value="${colors.iconColor}" id="iconColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlIconColor');

              $('<div id="pmcControlSecondaryColor" class="pmcControls"/>').appendTo('#pmcControldiv');
              $('<span id="pmcControlText">Secondary Color</span>').appendTo('#pmcControlSecondaryColor');
              $(`<input type="color" value="${colors.secondarybackgroundColor}" id="secondarybgColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlSecondaryColor');

              $('<div id="pmcControlTertiaryColor" class="pmcControls"/>').appendTo('#pmcControldiv');
              $('<span id="pmcControlText">Tertiary Color</span>').appendTo('#pmcControlTertiaryColor');
              $(`<input type="color" value="${colors.tertiarybackgroundColor}" id="tertiarybgColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlTertiaryColor');

              $('<div id="pmcControlHoverColor" class="pmcControls"/>').appendTo('#pmcControldiv');
              $('<span id="pmcControlText">Hover Color</span>').appendTo('#pmcControlHoverColor');
              $(`<input type="color" value="${colors.hoverColor}" id="hoverColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlHoverColor');

              $('<button id="pmcGradientSwitch" class="pmcSettingsInput"></button><br>').appendTo('#pmcControldiv');
              $('<span id="pmcGradientText"></span>').appendTo('#pmcGradientSwitch');
              $("#pmcGradientText").text(GM_getValue("sT", "Switch to Gradient"));
              $('<div id="customGradientdiv" class="pmcSettingsInput"/>').appendTo('#pmcControldiv');
              $('<input type="text" placeholder="URL from Coolor" autocomplete="off" id="customGradient"/>').appendTo('#customGradientdiv');
              $('<button id="customGradButton">Submit</button>').appendTo('#customGradientdiv');
              
              $('<button id="pmcResetButton" class="">Reset to Default</button>').appendTo('#pmcControldiv');
              $("#pmcControldiv").hide();

          }
      }
  }, 500);

  // submit button for custom gradient
  $("body").on("click", "#customGradButton", () => {
      //color pallettes from https://coolors.co/
      var pallete = $("#customGradient").val();
      if (pallete.includes("https://coolors.co/palette/")) {
          pallete = "#" + pallete.slice(pallete.lastIndexOf("/") + 1);
          let dashsymbol = /-/g;
          pallete = pallete.replace(dashsymbol, ", #");
          colors.sideColorGradient = `linear-gradient(0deg, ${pallete})`;
      } else {
          alert("Please submit a pallete url from coolors.co. No other urls are accepted.")
      }

  });

  let isClicked = GM_getValue("isClicked", false);
  let sT = GM_getValue("sT", "it doesnt matter what i put here"); // sT needs to be defined somewhere so here works
  $("body").on("click", "#pmcGradientText", () => {
      if (!isClicked){
          sT = "Switch to Static Color"
          $("#pmcGradientText").text(sT);
          isClicked = true;
      } else {
          sT = "Switch to Gradient"
          $("#pmcGradientText").text(sT);
          isClicked = false;
      }
      GM_setValue("isClicked", isClicked)
      GM_setValue("sT", sT)
  });


  let isHidden = true //sets isHidden true as menu is always off when tray opened
  // On click of menu, PMC opens
  // function is for button animation
  $("body").on("click", "#pmccheck", () => {
      if (isHidden){
          isHidden = false
          $("#pmccheck").attr('class', 'faJyW_cSXm faJyW_cjfS faJyW_cVYB faJyW_bYta faJyW_doqw');
          $(".innerappend").attr("d", "M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z");
          $(".innerappend").attr("fill-rule", "evenodd");
          $("#pmcControldiv").show();
      } else {
          isHidden = true
          $("#pmccheck").attr('class', 'faJyW_cSXm faJyW_bYta faJyW_doqw');
          $(".innerappend").attr("d", "M797.319865 985.881673L344.771525 1438.43001 533.333333 1626.99182 985.881673 1174.44348 1438.43001 1626.99182 1626.99182 1438.43001 1174.44348 985.881673 1626.99182 533.333333 1438.43001 344.771525 985.881673 797.319865 533.333333 344.771525 344.771525 533.333333z");
          $(".innerappend").attr("fill-rule", "nonzero");
          $("#pmcControldiv").hide();
      }
  });

  // reset button to default colors
  $("body").on("click", "#pmcResetButton", () => {
      $("#backgroundColorSelector")[0].value = defaultColors.backgroundColor;
      colors.sideColorGradient = defaultColors.sideColorGradient
      $("#sideColorSelector")[0].value = defaultColors.sideColor;
      $("#minorsideColorSelector")[0].value = defaultColors.minorsideColor;
      $("#textColorSelector")[0].value = defaultColors.textColor;
      $("#accenttextColorSelector")[0].value = defaultColors.minortextColor;
      $("#iconColorSelector")[0].value = defaultColors.iconColor;
      $("#secondarybgColorSelector")[0].value = defaultColors.secondarybackgroundColor;
      $("#tertiarybgColorSelector")[0].value = defaultColors.tertiarybackgroundColor;
      $("#hoverColorSelector")[0].value = defaultColors.hoverColor;


  });

  setInterval(() => {
      // TODO: every 1000ms, get the colors value from storage and update all the css variables (doesnt seem to work rn)
      // TODO: get the initial colors to work as if you just installed the script, it probably has to do with the 2nd in Object.assign below
         // btw all object.assign does is it overwrites existing properties on an object with new ones but keeps all the old properties that havn't been changed
         // https://stackoverflow.com/questions/52357239/how-to-overwrite-javascript-object-values-using-object

      if ($('#pmcdiv').length) {
          // old version kept incase -> GM_setValue("colors", Object.assign({}, colors, {backgroundColor: $("#backgroundColorSelector").spectrum("get").toHexString()})); // Spectrum is crap btw
          // you cant have multiple setvalues, watch as you can make background color work perfectly but uncommenting the sideColor will have only side color function properly

          colors = Object.assign({}, colors, {backgroundColor: $("#backgroundColorSelector")[0].value});
          colors = Object.assign({}, colors, {sideColor: $("#sideColorSelector")[0].value});
          colors = Object.assign({}, colors, {sideColorGradient: GM_getValue('sideColorGradient', colors.sideColorGradient)});
          colors = Object.assign({}, colors, {minorsideColor: $("#minorsideColorSelector")[0].value});
          colors = Object.assign({}, colors, {textColor: $("#textColorSelector")[0].value});
          colors = Object.assign({}, colors, {minortextColor: $("#accenttextColorSelector")[0].value});
          colors = Object.assign({}, colors, {iconColor: $("#iconColorSelector")[0].value});
          colors = Object.assign({}, colors, {secondarybackgroundColor: $("#secondarybgColorSelector")[0].value});
          colors = Object.assign({}, colors, {tertiarybackgroundColor: $("#tertiarybgColorSelector")[0].value});
          colors = Object.assign({}, colors, {hoverColor: $("#hoverColorSelector")[0].value});

          //console.log(colors.sideColorGradient)
          GM_setValue("colors", colors)
          colors = GM_getValue('colors', defaultColors)


          document.documentElement.style.setProperty('--backgroundColor', colors.backgroundColor);
          if (sT == "Switch to Gradient") {
              document.documentElement.style.setProperty('--sideColor', colors.sideColor);
          } else {
              document.documentElement.style.setProperty('--sideColor', colors.sideColorGradient);
          }
          document.documentElement.style.setProperty('--minorsideColor', colors.minorsideColor);
          document.documentElement.style.setProperty('--newNotifColor', colors.newNotifColor);
          document.documentElement.style.setProperty('--dangerColor', colors.dangerColor);
          document.documentElement.style.setProperty('--textColor', colors.textColor);
          document.documentElement.style.setProperty('--minortextColor', colors.minortextColor);
          document.documentElement.style.setProperty('--buttonbackColor', colors.buttonbackColor);
          document.documentElement.style.setProperty('--secondarybackgroundColor', colors.secondarybackgroundColor);
          document.documentElement.style.setProperty('--tertiarybackgroundColor', colors.tertiarybackgroundColor);
          document.documentElement.style.setProperty('--iconColor', colors.iconColor);
          document.documentElement.style.setProperty('--hoverColor', colors.hoverColor);
          document.documentElement.style.setProperty('--slimborderfixColor', colors.slimborderfixColor);
          
      }
  }, 500);

})();