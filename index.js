'use strict';

function makeProject(project){
  const projectHTML = `
    <div class="project">
    <h2>${project.name}</h2>
    <h3>${project.description}</h3>
    <img src="${project.pic.src}" alt="${project.pic.alt}"><br />
    <a href="${project.git}" rel="noopener noreferrer" target="_blank">Github page</a><br />
    <a href="${project.live}" rel="noopener noreferrer" target="_blank">Live version</a><br />
    </div>`;
  return projectHTML;
}

function fillProjects(){
  for(let i=0; i<projects.length; i++){
    $('.js-project-list').append(makeProject(projects[i]));
  }
}


function navigate(){
  $('.menu').on('click', 'li', function(event){
    console.log('\'navigate\' ran');

    var tab = event.currentTarget;
    $('ul.menu').find('li.current').removeClass('current');
    $(tab).addClass('current');
    $('.menu').removeClass('active');
    //console.log(tab);
  });
}

function menuToggle(){
  $('#hamburger').on('click', function(event){
    console.log('menu toggled');
    event.preventDefault();
    $('.menu').toggleClass('active', { direction: 'left' }, 1000);
  });
}

$(function (){
  navigate();
  fillProjects();
  menuToggle();
});