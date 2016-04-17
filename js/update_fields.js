$(document).ready(function() {
    //toggle `popup` / `inline` mode
    $.fn.editable.defaults.mode = 'popup';

    $('#comments').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#sqf').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#dqf').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#ewt').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#original_database').editable({
        type: "select",
        url: "/data_update/",
    });

    $('#strengths_interp_by').editable({
        type: "select",
        url: "/data_update/",
    });

    $('#pile_type').editable({
        type: "select",
        url: "/data_update/",
    });

    $('#pile_shape').editable({
        type: "select",
        url: "/data_update/",
    });

    $('#pile_wt').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#pile_length').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#exposed_length').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#penetration_depth').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#wall_thickness').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#ht_soil_plug').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#ht_conc_plug').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#load_direction').editable({
        type: "select",
        url: "/data_update/",
    });

    $('#taper').editable({
        type: "select",
        url: "/data_update/",
    });

    $('#tip_displ_ratio').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#top_width').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#top_circumference').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#soil_profile').editable({
        type: "select",
        url: "/data_update/",
    });

    $('#defined_failure_load').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#settlement_at_def_failure_load').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#max_applied_load').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#settlement_95').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#settlement_50').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#load_at_5inch_butt_movement').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#extrapolated_failure_load').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#pile_spring_constant').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#set_up_time').editable({
        type: "text",
        url: "/data_update/",
    });

    $('#preboring_hole_diameter').editable({
        type: "text",
        url: "/data_update/",
    });


});