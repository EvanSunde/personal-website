const project = {
    name: 'project',
    title: 'Project-Next',
    type: 'document',
    fields: [
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options: {source : 'name'}
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            option: {hotspot: true},
            field: [
                {
                    name:'alt',
                    title:'Alt',
                    type:'string'
                }
            ]
        },
        {
            name:'url',
            title:'URL',
            type:'url'
        },
        {
            name:'content',
            title:'Content',
            type: 'array',
            of: [{type:"block"}]
        }
    ]
}



export default project;