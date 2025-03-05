import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
  imageUrl: string = 'perfil.png';

  toggleCollapse(): void {
    // this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());

   const toggle = document.getElementById('header-toggle')
   const   sidebar = document.getElementById('sidebar')
   const     header = document.getElementById('header')
   const    main = document.getElementById( 'main')

if(toggle && sidebar && header && main){
    toggle.addEventListener('click', ()=>{
        sidebar.classList.toggle('show-sidebar')
        
        header.classList.toggle('left-pd')
     
        main.classList.toggle('left-pd')
    })
}

  }

}
