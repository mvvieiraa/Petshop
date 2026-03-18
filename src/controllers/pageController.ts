    import {Request, Response} from 'express']
    import { createMenuObject } from '../helpers/createMenuObject';

    export const home = (req: Request, res: Response) => {
       //res.send('home')
        res.render('pages/page',{

         menu:createMenuObject('all'),
            banner: {
                title: 'Todos os animais',
                background: "allanimais"
            }
        }
        )
    };
    

        export const dogs = (req: Request, res: Response) => {
     res.render('pages/page',{
         menu:createMenuObject('all'),
         banner: {
                title: 'Cachorros',
                background: "banner_dog.jpg"
            }
     }
     ) 
    };
    

        export const cats = (req: Request, res: Response) => {
       res.render('pages/page', {

                 menu:createMenuObject('all'),
         banner: {
                title: 'Gatos',
                background: "banner_cat.jpg"
            }
       })
    };

        export const fishes = (req: Request, res: Response) => {
      res.render('pages/page', {
                 menu:createMenuObject('all'),
         banner: {
                title: 'Peixes',
                background: "banner_fishes.jpg"
            }
      })
    };