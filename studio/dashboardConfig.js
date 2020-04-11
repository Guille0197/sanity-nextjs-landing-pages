export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e911be3fdd5cf1336218d63',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a4g3pxb2',
                  apiId: '1e5636a3-8571-44a8-b357-97155adda622'
                },
                {
                  buildHookId: '5e911be4fdd5cf0d8a2189c2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vozvtdbr',
                  apiId: '08fb047e-8ae4-40f2-ae78-e0de025b4fed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Guille0197/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vozvtdbr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
