import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-slider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.scss']
})
export class SliderComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;

  selectedIndex = 0;
  constructor() {}

  times = [
        {
            "nome":"São Paulo FC",
            "abreviacao":"SPFC",
            "escudo":"https://escudosfc.com.br/images/saopaulo.png",
            "origem":"Brasil",
            "dataFundacao":"25/01/1930",
            "tamanhoTorcida":"",
            "titulos":"22 Campeonatos Paulistas: 1931, 1943, 1945, 1946, 1948, 1949, 1953, 1957, 1970, 1971, 1975, 1980, 1991, 1992, 1998, 2000, 2002, 2005 e 2021,1 Torneio Rio-São Paulo: 2001,1 Copa do Brasil: 2023,6 Campeonatos Brasileiros: 1977, 1986, 1991, 2006, 2007 e 2008,1 Supercopa da Libertadores: 1993,2 Recopas Sulamericanas: 1993 e 1994,1 Copa Conmebol: 1994,3 Mundiais de Clubes: 1992, 1993 e 2005,3 Copas Libertadores: 1992, 1993 e 2005,1 Copa Sul-Americana: 2012,1 Supercopa do Brasil: 2024"
        },
        {
            "nome":"São Paulo FC",
            "abreviacao":"Flamengo",
            "escudo":"https://escudosfc.com.br/images/fla.png",
            "origem":"Brasil",
            "dataFundacao":"25/01/1930",
            "tamanhoTorcida":"",
            "titulos":"22 Campeonatos Paulistas: 1931, 1943, 1945, 1946, 1948, 1949, 1953, 1957, 1970, 1971, 1975, 1980, 1991, 1992, 1998, 2000, 2002, 2005 e 2021,1 Torneio Rio-São Paulo: 2001,1 Copa do Brasil: 2023,6 Campeonatos Brasileiros: 1977, 1986, 1991, 2006, 2007 e 2008,1 Supercopa da Libertadores: 1993,2 Recopas Sulamericanas: 1993 e 1994,1 Copa Conmebol: 1994,3 Mundiais de Clubes: 1992, 1993 e 2005,3 Copas Libertadores: 1992, 1993 e 2005,1 Copa Sul-Americana: 2012,1 Supercopa do Brasil: 2024"
        },
        {
            "nome":"São Paulo FC",
            "abreviacao":"Corinthians",
            "escudo":"https://escudosfc.com.br/images/corinthians.png",
            "origem":"Brasil",
            "dataFundacao":"25/01/1930",
            "tamanhoTorcida":"",
            "titulos":"22 Campeonatos Paulistas: 1931, 1943, 1945, 1946, 1948, 1949, 1953, 1957, 1970, 1971, 1975, 1980, 1991, 1992, 1998, 2000, 2002, 2005 e 2021,1 Torneio Rio-São Paulo: 2001,1 Copa do Brasil: 2023,6 Campeonatos Brasileiros: 1977, 1986, 1991, 2006, 2007 e 2008,1 Supercopa da Libertadores: 1993,2 Recopas Sulamericanas: 1993 e 1994,1 Copa Conmebol: 1994,3 Mundiais de Clubes: 1992, 1993 e 2005,3 Copas Libertadores: 1992, 1993 e 2005,1 Copa Sul-Americana: 2012,1 Supercopa do Brasil: 2024"
        },
         {
            "nome":"São Paulo FC",
            "abreviacao":"Palmeiras",
            "escudo":"https://escudosfc.com.br/images/palmeiras.png",
            "origem":"Brasil",
            "dataFundacao":"25/01/1930",
            "tamanhoTorcida":"",
            "titulos":"22 Campeonatos Paulistas: 1931, 1943, 1945, 1946, 1948, 1949, 1953, 1957, 1970, 1971, 1975, 1980, 1991, 1992, 1998, 2000, 2002, 2005 e 2021,1 Torneio Rio-São Paulo: 2001,1 Copa do Brasil: 2023,6 Campeonatos Brasileiros: 1977, 1986, 1991, 2006, 2007 e 2008,1 Supercopa da Libertadores: 1993,2 Recopas Sulamericanas: 1993 e 1994,1 Copa Conmebol: 1994,3 Mundiais de Clubes: 1992, 1993 e 2005,3 Copas Libertadores: 1992, 1993 e 2005,1 Copa Sul-Americana: 2012,1 Supercopa do Brasil: 2024"
        },
    ];

  ngOnInit(): void {
    this.autoSlideImages();
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.selectedIndex < this.images.length - 1
        ? this.selectedIndex++
        : (this.selectedIndex = 0);
    }, 3000);
  }

}
