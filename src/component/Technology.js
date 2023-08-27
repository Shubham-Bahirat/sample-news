import React, { Component } from 'react';
import Newsitem from './Newsitem';
export class Technology extends Component {
    articles = [
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Disway",
          "title": "Harga di Bawah 2 Juta! Nokia T20: Tablet Canggih dengan Sistem Operasi Android 11 dan Baterai Jumbo, Gahar! - radarjabar.disway.id - Disway",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMikAFodHRwczovL3JhZGFyamFiYXIuZGlzd2F5LmlkL3JlYWQvNjU2Njg1L2hhcmdhLWRpLWJhd2FoLTItanV0YS1ub2tpYS10MjAtdGFibGV0LWNhbmdnaWgtZGVuZ2FuLXNpc3RlbS1vcGVyYXNpLWFuZHJvaWQtMTEtZGFuLWJhdGVyYWktanVtYm8tZ2FoYXLSAY8BaHR0cHM6Ly9yYWRhcmphYmFyLmRpc3dheS5pZC9hbXAvNjU2Njg1L2hhcmdhLWRpLWJhd2FoLTItanV0YS1ub2tpYS10MjAtdGFibGV0LWNhbmdnaWgtZGVuZ2FuLXNpc3RlbS1vcGVyYXNpLWFuZHJvaWQtMTEtZGFuLWJhdGVyYWktanVtYm8tZ2FoYXI?oc=5",
          "urlToImage": "https://media.wired.com/photos/64e901ea3c194283dd3f56a7/191:100/w_1280,c_limit/Meta-Quest-3-Gear-Roundup.jpg",
          "publishedAt": "2023-08-26T02:27:38Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Pro Nusantara",
          "title": "Game Cheat GTA: Memanfaatkan Fitur Ikonik yang Menambah Keseruan dalam Grand Theft Auto - Pro Nusantara - Pro Nusantara",
          "description":"https://cdn.mos.cms.futurecdn.net/H5bGhuN56dv3b69RyKRFUZ-1200-80.jpg",
          "url": "https://news.google.com/rss/articles/CBMijAFodHRwczovL3d3dy5wcm9udXNhbnRhcmEuY29tL2VudGVydGFpbm1lbnQvNDA1OTk0MDAxMi9nYW1lLWNoZWF0LWd0YS1tZW1hbmZhYXRrYW4tZml0dXItaWtvbmlrLXlhbmctbWVuYW1iYWgta2VzZXJ1YW4tZGFsYW0tZ3JhbmQtdGhlZnQtYXV0b9IBkAFodHRwczovL3d3dy5wcm9udXNhbnRhcmEuY29tL2VudGVydGFpbm1lbnQvYW1wLzQwNTk5NDAwMTIvZ2FtZS1jaGVhdC1ndGEtbWVtYW5mYWF0a2FuLWZpdHVyLWlrb25pay15YW5nLW1lbmFtYmFoLWtlc2VydWFuLWRhbGFtLWdyYW5kLXRoZWZ0LWF1dG8?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:35:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Tekno Kompas.com",
          "title": "Gmail Punya Fitur Baru Cegah E-mail Diretas - Kompas.com - Tekno Kompas.com",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vdGVrbm8ua29tcGFzLmNvbS9yZWFkLzIwMjMvMDgvMjYvMDgzMDAwNzcvZ21haWwtcHVueWEtZml0dXItYmFydS1jZWdhaC1lLW1haWwtZGlyZXRhc9IBYWh0dHBzOi8vYW1wLmtvbXBhcy5jb20vdGVrbm8vcmVhZC8yMDIzLzA4LzI2LzA4MzAwMDc3L2dtYWlsLXB1bnlhLWZpdHVyLWJhcnUtY2VnYWgtZS1tYWlsLWRpcmV0YXM?oc=5",
          "urlToImage":  "https://cdn.vox-cdn.com/thumbor/Y-Ed-WzSY3VVpodyM7XQNIMKlZ0=/0x0:5000x3327/1200x628/filters:focal(1905x917:1906x918)/cdn.vox-cdn.com/uploads/chorus_asset/file/24870968/1242866411.jpg",
          "publishedAt": "2023-08-26T01:30:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "ANTARA",
          "title": "MSI dan Mercedes-AMG kolaborasi luncurkan laptop seharga Rp44 jutaan - ANTARA",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LmFudGFyYW5ld3MuY29tL2Jlcml0YS8zNjk3OTM1L21zaS1kYW4tbWVyY2VkZXMtYW1nLWtvbGFib3Jhc2ktbHVuY3Vya2FuLWxhcHRvcC1zZWhhcmdhLXJwNDQtanV0YWFu0gFwaHR0cHM6Ly9tLmFudGFyYW5ld3MuY29tL2FtcC9iZXJpdGEvMzY5NzkzNS9tc2ktZGFuLW1lcmNlZGVzLWFtZy1rb2xhYm9yYXNpLWx1bmN1cmthbi1sYXB0b3Atc2VoYXJnYS1ycDQ0LWp1dGFhbg?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:15:10Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Lifestyle Kontan",
          "title": "Realme 11 Resmi Hadir dengan Harga Rp 3,6 Juta, Simak Spesifikasinya - Lifestyle Kontan",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vbGlmZXN0eWxlLmtvbnRhbi5jby5pZC9uZXdzL3JlYWxtZS0xMS1yZXNtaS1oYWRpci1kZW5nYW4taGFyZ2EtcnAtMzYtanV0YS1zaW1hay1zcGVzaWZpa2FzaW55YdIBYGh0dHBzOi8vYW1wLmtvbnRhbi5jby5pZC9uZXdzL3JlYWxtZS0xMS1yZXNtaS1oYWRpci1kZW5nYW4taGFyZ2EtcnAtMzYtanV0YS1zaW1hay1zcGVzaWZpa2FzaW55YQ?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:00:37Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "ANTARA",
          "title": "Kemarin, lagu baru Selena Gomez hingga Huawei MatePad 11.5 meluncur - ANTARA",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LmFudGFyYW5ld3MuY29tL2Jlcml0YS8zNjk3ODkzL2tlbWFyaW4tbGFndS1iYXJ1LXNlbGVuYS1nb21lei1oaW5nZ2EtaHVhd2VpLW1hdGVwYWQtMTE1LW1lbHVuY3Vy0gFtaHR0cHM6Ly9tLmFudGFyYW5ld3MuY29tL2FtcC9iZXJpdGEvMzY5Nzg5My9rZW1hcmluLWxhZ3UtYmFydS1zZWxlbmEtZ29tZXotaGluZ2dhLWh1YXdlaS1tYXRlcGFkLTExNS1tZWx1bmN1cg?oc=5",
          "urlToImage": "https://media.wired.com/photos/64e901ea3c194283dd3f56a7/191:100/w_1280,c_limit/Meta-Quest-3-Gear-Roundup.jpg",
          "publishedAt": "2023-08-25T23:40:50Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikInet",
          "title": "Ups! Samsung Tak Sengaja Bocorkan Kehadiran Galaxy S23 FE - detikInet",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vaW5ldC5kZXRpay5jb20vY29uc3VtZXIvZC02ODk2NDc3L3Vwcy1zYW1zdW5nLXRhay1zZW5nYWphLWJvY29ya2FuLWtlaGFkaXJhbi1nYWxheHktczIzLWZl0gFmaHR0cHM6Ly9pbmV0LmRldGlrLmNvbS9jb25zdW1lci9kLTY4OTY0NzcvdXBzLXNhbXN1bmctdGFrLXNlbmdhamEtYm9jb3JrYW4ta2VoYWRpcmFuLWdhbGF4eS1zMjMtZmUvYW1w?oc=5",
          "urlToImage": "https://media.wired.com/photos/64e901ea3c194283dd3f56a7/191:100/w_1280,c_limit/Meta-Quest-3-Gear-Roundup.jpg",
          "publishedAt": "2023-08-25T23:29:01Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "MSN",
          "title": "Pengguna WhatsApp Kini Bisa Kirim Video Kualitas HD - MSN",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3Lm1zbi5jb20vaWQtaWQvYmVyaXRhL3Rla25vbG9naWRhbnNhaW5zL3BlbmdndW5hLXdoYXRzYXBwLWtpbmktYmlzYS1raXJpbS12aWRlby1rdWFsaXRhcy1oZC9hci1BQTFmTVpZcdIBAA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T23:02:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "HarapanRakyat.com",
          "title": "Build Item Gatotkaca Tersakit Mobile Legends, Bikin Jadi Preman Exp Laner - HarapanRakyat.com",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LmhhcmFwYW5yYWt5YXQuY29tLzIwMjMvMDgvYnVpbGQtaXRlbS1nYXRvdGthY2EtdGVyc2FraXQtbW9iaWxlLWxlZ2VuZHMtYmlraW4tamFkaS1wcmVtYW4tZXhwLWxhbmVyL9IBAA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T19:41:56Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "disway.id",
          "title": "Mark Zuckerberg Update Fitur Terbaru WhatsApp, Apa Itu? - disway.id - disway.id",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiU2h0dHBzOi8vZGlzd2F5LmlkL3JlYWQvNzIxNTU2L21hcmstenVja2VyYmVyZy11cGRhdGUtZml0dXItdGVyYmFydS13aGF0c2FwcC1hcGEtaXR10gFSaHR0cHM6Ly9kaXN3YXkuaWQvYW1wLzcyMTU1Ni9tYXJrLXp1Y2tlcmJlcmctdXBkYXRlLWZpdHVyLXRlcmJhcnUtd2hhdHNhcHAtYXBhLWl0dQ?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T16:53:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "VOI.ID",
          "title": "Karier Baru untuk Warhammer: Vermintide 2, Necromancer Hadir pada 19 Oktober - VOI.ID",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiamh0dHBzOi8vdm9pLmlkL3Rla25vbG9naS8zMDQ2ODAva2FyaWVyLWJhcnUtdW50dWstd2FyaGFtbWVyLXZlcm1pbnRpZGUtMi1uZWNyb21hbmNlci1oYWRpci1wYWRhLTE5LW9rdG9iZXLSAWRodHRwczovL3ZvaS5pZC9hbXAvMzA0NjgwL2thcmllci1iYXJ1LXVudHVrLXdhcmhhbW1lci12ZXJtaW50aWRlLTItbmVjcm9tYW5jZXItaGFkaXItcGFkYS0xOS1va3RvYmVy?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T16:34:00Z",
          "content": null
        }]
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
        

export default Technology;
