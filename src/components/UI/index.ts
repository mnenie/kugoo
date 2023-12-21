import type { App } from "vue"
import BtnBanner from "./BtnBanner.vue"
import ButtonCardPurple from "./ButtonCardPurple.vue"
import ButtonChoose from "./ButtonChoose.vue"
import ButtonGray from "./ButtonGray.vue"
import ButtonLargeBanner from "./ButtonLargeBanner.vue"
import ButtonLargeWhite from "./ButtonLargeWhite.vue"
import ButtonLargeYellow from "./ButtonLargeYellow.vue"
import ButtonLgBorderPurple from "./ButtonLgBorderPurple.vue"
import ButtonLimitation from "./ButtonLimitation.vue"
import ButtonMore from './ButtonMore.vue'
import ButtonNotFound from "./ButtonNotFound.vue"
import ButtonPurpleLg from "./ButtonPurpleLg.vue"
import ButtonThanks from "./ButtonThanks.vue"
import ButtonToPurple from "./ButtonToPurple.vue"
import ButtonYellowBg from "./ButtonYellowBg.vue"
import ButtonYellowCard from "./ButtonYellowCard.vue"
import DropdownCards from "./DropdownCards.vue"
import DropdownCatalog from "./DropdownCatalog.vue"
import InputForm from "./InputForm.vue"
import InputPurple from "./InputPurple.vue"
import LinkArrow from "./LinkArrow.vue"
import AccordionItem from "./AccordionItem.vue"
import FilterItems from "./FilterItems.vue"

const components = [
  {name: 'BtnBanner', component: BtnBanner},
  {name: 'ButtonCardPurple', component: ButtonCardPurple},
  {name: 'ButtonChoose', component: ButtonChoose},
  {name: 'ButtonGray', component: ButtonGray},
  {name: 'ButtonLargeBanner', component: ButtonLargeBanner},
  {name: 'ButtonLargeWhite', component: ButtonLargeWhite},
  {name: 'ButtonLargeYellow', component: ButtonLargeYellow},
  {name: 'ButtonLgBorderPurple', component: ButtonLgBorderPurple},
  {name: 'ButtonLimitation', component: ButtonLimitation},
  {name: 'ButtonMore', component: ButtonMore},
  {name: 'ButtonNotFound', component: ButtonNotFound},
  {name: 'ButtonPurpleLg', component: ButtonPurpleLg},
  {name: 'ButtonThanks', component: ButtonThanks},
  {name: 'ButtonToPurple', component: ButtonToPurple},
  {name: 'ButtonYellowBg', component: ButtonYellowBg},
  {name: 'ButtonYellowCard', component: ButtonYellowCard},
  {name: 'DropdownCards', component: DropdownCards},
  {name: 'DropdownCatalog', component: DropdownCatalog},
  {name: 'InputForm', component: InputForm},
  {name: 'InputPurple', component: InputPurple},
  {name: 'LinkArrow', component: LinkArrow},
  {name: 'AccordionItem', component: AccordionItem},
  {name: 'FilterItems', component: FilterItems},

]
export default {
  install(app: App){
    components.forEach(({name, component}) => {
      app.component(name, component)
    })
  }
}
