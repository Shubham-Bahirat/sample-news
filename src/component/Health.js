import React, { Component } from 'react';

import Newsitem from './Newsitem';
export class Health extends Component {
    articles = [
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikJatim",
          "title": "Waspadai Sejumlah Penyakit di Kala Musim Kemarau - detikJatim",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vd3d3LmRldGlrLmNvbS9qYXRpbS9iZXJpdGEvZC02ODk2NDQyL3dhc3BhZGFpLXNlanVtbGFoLXBlbnlha2l0LWRpLWthbGEtbXVzaW0ta2VtYXJhddIBYWh0dHBzOi8vd3d3LmRldGlrLmNvbS9qYXRpbS9iZXJpdGEvZC02ODk2NDQyL3dhc3BhZGFpLXNlanVtbGFoLXBlbnlha2l0LWRpLWthbGEtbXVzaW0ta2VtYXJhdS9hbXA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T02:30:54Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Banjarmasin Post",
          "title": "Khasiat dan Efek Samping Terong yang Wajib Kamu Ketahui, Salah Satunya Bisa Timbulkan Alergi - Banjarmasin Post",
          "description":"https://static1.anpoimages.com/wordpress/wp-content/uploads/2021/07/16/esim-brussels-hero.jpg",
          "url": "https://news.google.com/rss/articles/CBMiiAFodHRwczovL2Jhbmphcm1hc2luLnRyaWJ1bm5ld3MuY29tLzIwMjMvMDgvMjYva2hhc2lhdC1kYW4tZWZlay1zYW1waW5nLXRlcm9uZy15YW5nLXdhamliLWthbXUta2V0YWh1aS1zYWxhaC1zYXR1bnlhLWJpc2F0aW1idWxrYW4tYWxlcmdp0gGMAWh0dHBzOi8vYmFuamFybWFzaW4udHJpYnVubmV3cy5jb20vYW1wLzIwMjMvMDgvMjYva2hhc2lhdC1kYW4tZWZlay1zYW1waW5nLXRlcm9uZy15YW5nLXdhamliLWthbXUta2V0YWh1aS1zYWxhaC1zYXR1bnlhLWJpc2F0aW1idWxrYW4tYWxlcmdp?oc=5",
          "urlToImage": "https://photos5.appleinsider.com/gallery/55985-113648-Main-Image-xl.jpg",
          "publishedAt": "2023-08-26T02:24:36Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "KONTAN",
          "title": "3 Bahan Herbal Alami yang Bisa Lunturkan Kolesterol Tinggi yang Gampang Dibeli - KONTAN",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMicmh0dHBzOi8va2VzZWhhdGFuLmtvbnRhbi5jby5pZC9uZXdzLzMtYmFoYW4taGVyYmFsLWFsYW1pLXlhbmctYmlzYS1sdW50dXJrYW4ta29sZXN0ZXJvbC10aW5nZ2kteWFuZy1nYW1wYW5nLWRpYmVsadIBAA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T02:12:25Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "CNN Indonesia",
          "title": "Pakar Ungkap Jamur Makin Brutal saat Bumi Makin Panas - CNN Indonesia",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMidmh0dHBzOi8vd3d3LmNubmluZG9uZXNpYS5jb20vdGVrbm9sb2dpLzIwMjMwODIzMTYzMjAxLTE5OS05ODk2MjIvcGFrYXItdW5na2FwLWphbXVyLW1ha2luLWJydXRhbC1zYWF0LWJ1bWktbWFraW4tcGFuYXPSAXpodHRwczovL3d3dy5jbm5pbmRvbmVzaWEuY29tL3Rla25vbG9naS8yMDIzMDgyMzE2MzIwMS0xOTktOTg5NjIyL3Bha2FyLXVuZ2thcC1qYW11ci1tYWtpbi1icnV0YWwtc2FhdC1idW1pLW1ha2luLXBhbmFzL2FtcA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:54:42Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Cantika.com",
          "title": "Alasan Dokter Tidak Sarankan Konsumsi Obat Herbal untuk Pasien Kanker - Cantika.com",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LmNhbnRpa2EuY29tL3JlYWQvMTc2NDI2Mi9hbGFzYW4tZG9rdGVyLXRpZGFrLXNhcmFua2FuLWtvbnN1bXNpLW9iYXQtaGVyYmFsLXVudHVrLXBhc2llbi1rYW5rZXLSAWlodHRwczovL3d3dy5jYW50aWthLmNvbS9hbXAvMTc2NDI2Mi9hbGFzYW4tZG9rdGVyLXRpZGFrLXNhcmFua2FuLWtvbnN1bXNpLW9iYXQtaGVyYmFsLXVudHVrLXBhc2llbi1rYW5rZXI?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:30:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikFood",
          "title": "5 Fakta Diet Starvation yang Populer dan Menelan Korban Nyawa - detikFood",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiaWh0dHBzOi8vZm9vZC5kZXRpay5jb20vaW5mby1zZWhhdC9kLTY4OTYyMzAvNS1mYWt0YS1kaWV0LXN0YXJ2YXRpb24teWFuZy1wb3B1bGVyLWRhbi1tZW5lbGFuLWtvcmJhbi1ueWF3YdIBbWh0dHBzOi8vZm9vZC5kZXRpay5jb20vaW5mby1zZWhhdC9kLTY4OTYyMzAvNS1mYWt0YS1kaWV0LXN0YXJ2YXRpb24teWFuZy1wb3B1bGVyLWRhbi1tZW5lbGFuLWtvcmJhbi1ueWF3YS9hbXA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:00:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Sinar Harapan",
          "title": "Waduh, 85 Persen Penyebab Kanker Kepala dan Leher 85 Adalah Penggunaan Tembakau - Sinar Harapan",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMif2h0dHBzOi8vd3d3LnNpbmFyaGFyYXBhbi5jby9saWZlc3R5bGUvMzg1OTk0MDI3NC93YWR1aC04NS1wZXJzZW4tcGVueWViYWIta2Fua2VyLWtlcGFsYS1kYW4tbGVoZXItODUtYWRhbGFoLXBlbmdndW5hYW4tdGVtYmFrYXXSAQA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T00:51:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "SUMEKS.CO",
          "title": "Pernah Makan Daun Pakis? Ini 6 Manfaatnya Untuk Kesehatan Tubuh - sumeks.disway.id - SUMEKS.CO",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vc3VtZWtzLmRpc3dheS5pZC9yZWFkLzY3NzQwOC9wZXJuYWgtbWFrYW4tZGF1bi1wYWtpcy1pbmktNi1tYW5mYWF0bnlhLXVudHVrLWtlc2VoYXRhbi10dWJ1aNIBYmh0dHBzOi8vc3VtZWtzLmRpc3dheS5pZC9hbXAvNjc3NDA4L3Blcm5haC1tYWthbi1kYXVuLXBha2lzLWluaS02LW1hbmZhYXRueWEtdW50dWsta2VzZWhhdGFuLXR1YnVo?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T00:25:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "TEMPO.co",
          "title": "Studi Sebut Jalan Kaki 3 Kilometer Setiap Hari Dapat Bantu Menurunkan Risiko Kematian - TEMPO.co",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMieGh0dHBzOi8vZ2F5YS50ZW1wby5jby9yZWFkLzE3NjQyODgvc3R1ZGktc2VidXQtamFsYW4ta2FraS0zLWtpbG9tZXRlci1zZXRpYXAtaGFyaS1kYXBhdC1iYW50dS1tZW51cnVua2FuLXJpc2lrby1rZW1hdGlhbtIBd2h0dHBzOi8vZ2F5YS50ZW1wby5jby9hbXAvMTc2NDI4OC9zdHVkaS1zZWJ1dC1qYWxhbi1rYWtpLTMta2lsb21ldGVyLXNldGlhcC1oYXJpLWRhcGF0LWJhbnR1LW1lbnVydW5rYW4tcmlzaWtvLWtlbWF0aWFu?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T00:08:00Z",
          "content": null
        }
    ]
    
  constructor(){
    super();
    console.log("I am Constructor ")
    this.state = {
      articles: this.articles,
      loading: false,
  
    }
   
    
  }
  render() {
    return (
      <>
      <div className='container my-3'>
        <h3 className='text-center' style={{margin:'35px 0px',marginTop:'90px'}}  >RKNews - Headlines</h3>
       <div className='row'>
        { this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <Newsitem title={element.title?element.title.slice(0,40):""} discription={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsurl={element.url}
                  author={element.author} publishedAt={element.publishedAt} />
        </div>
        })}
      

       </div>
      
      
       </div>
       </>
    );
  }

}

export default Health;
