import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../../../share/loading/loading.component';
import { NavbarComponent } from '../../../share/navbar/navbar.component';
import { FooterComponent } from '../../../share/footer/footer.component';
import { SocialComponent } from '../../component/home/social/social.component';
import { ServiceComponent } from '../../component/home/service/service.component';
import { LenguageComponent } from '../../component/home/lenguage/lenguage.component';
import { SkillComponent } from '../../component/home/skill/skill.component';
import { ReviewComponent } from '../../component/home/review/review.component';
import { EducationComponent } from '../../component/home/education/education.component';
import { WorkComponent } from '../../component/home/work/work.component';
import { PriceComponent } from '../../component/home/price/price.component';
import { BarnerComponent } from '../../component/home/barner/barner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ServiceComponent, LenguageComponent, SkillComponent, ReviewComponent, EducationComponent, WorkComponent, PriceComponent, SocialComponent, BarnerComponent, NavbarComponent, FooterComponent, LoadingComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  {
  
}
