import {model} from "./model";
import {Site} from "./classes/site";
import {Sitebar} from "./classes/sitebar";
import './styles/main.css'



const site = new Site('#site')

new Sitebar('#panel')

site.render(model)

