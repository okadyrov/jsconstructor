import {model} from "./model";
import {Site} from "./classes/site";
import {Sitebar} from "./classes/sitebar";
import './styles/main.css'



const site = new Site('#site')

const updateCallback = newBlock => {
    model.push(newBlock)
    site.render(model)
}

new Sitebar('#panel', updateCallback )

site.render(model)

