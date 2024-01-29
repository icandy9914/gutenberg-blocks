wp.blocks.registerBlockType('icandy-myfirst-gt-block/my-first-gt-block',{
    title: 'Icandy First Gutenberg Block',
    icon: 'admin-plugins',
    category: 'text',
    attributes: {
        fullName: {type: "string"},
        cityName: {type: "string"},
    },
    edit: function(props){
        function updateFullName(event){
            props.setAttributes({fullName: event.target.value});
        }
        function updateCityName(event){
            props.setAttributes({cityName: event.target.value});
        }
        return (
            <div style={{backgroundColor:'yellow',padding:20}}>
                <input type="text" placeholder="Name" onChange={updateFullName} value={props.attributes.fullName} />
                <input type="text" placeholder="City" onChange={updateCityName} value={props.attributes.cityName} />
            </div>
        );
    },
    save: function(props){
        return <p style={{backgroundColor:'blue',padding:20}}>Hi, My fullname is {props.attributes.fullName} and I am from {props.attributes.cityName}.</p>;
    }
});