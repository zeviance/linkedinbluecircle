// Copyright (c) 2015 Christopher Wong. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Simple extension to make LinkedIn Progress Strength always @ 100%
// Source code @ https://github.com/zeviance/linkedinbluecircle

document.addEventListener('DOMContentLoaded', function() {
  var span = document.getElementsByClassName('level-separator')[0];
  if (span) {
    span.style.height = "90px";
    span.style.width = "90px";
    span.style.backgroundColor = "rgb(40, 126, 182)";
  }

  // Let the trolling begins!
  var title = document.getElementsByClassName('title field-text')[0];
  if (title) {
    var first = Math.round(Math.random() * jobTitleFirstPart.length) - 1;
    var mid = Math.round(Math.random() * jobTitleSecondPart.length) - 1;
    var last = Math.round(Math.random() * jobTitleThirdPart.length) - 1;
     title.innerText =
       jobTitleFirstPart[first] + ' ' +
       jobTitleSecondPart[mid] + ' ' +
       jobTitleThirdPart[last];
  }

  // Let's change the color shall we?
  if (span) {
    var number = Math.round(Math.random() * 100);
    if (number > 33  && number < 66) {
      span.style.backgroundColor = "rgb(40, 126, 232)";
    }
    if (numbber > 67) {
      span.style.backgroundColor = "rgb(40, 196, 232)";
    }
  }


});
