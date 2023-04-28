

function toggle_section(){
    let show_more_section = document.getElementById('show_more_section');
    let side_toggle_options = document.getElementsByClassName('side_toggle_options')
    let show_less_section = document.getElementById('show_less_section');

    for(let i = 0; i< side_toggle_options.length; i++){
        let main_side_toggle_options = side_toggle_options[i];

        main_side_toggle_options.classList.toggle('no-disp');
        // show_more_section.classList.toggle('no-disp');
        // show_less_section.classList.toggle('no-disp');
if(main_side_toggle_options.classList.contains('no-disp')){
    show_more_section.classList.add('no-disp');
    show_less_section.classList.remove('no-disp');

}else{
    show_more_section.classList.remove('no-disp');
    show_less_section.classList.add('no-disp');
}
        
    }

    // if(main)
    // show_more_section.onclick
}

