import React, { Component } from 'react';
import Newsitem from './Newsitem';
export class Entertainment extends Component {
    articles = [
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikHot",
          "title": "Ahmad Dhani Blak-blakan Soal Pendirian AKS1 - detikHot",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiUWh0dHBzOi8vaG90LmRldGlrLmNvbS9tdXNpYy9kLTY4OTYxNTMvYWhtYWQtZGhhbmktYmxhay1ibGFrYW4tc29hbC1wZW5kaXJpYW4tYWtzMdIBVWh0dHBzOi8vaG90LmRldGlrLmNvbS9tdXNpYy9kLTY4OTYxNTMvYWhtYWQtZGhhbmktYmxhay1ibGFrYW4tc29hbC1wZW5kaXJpYW4tYWtzMS9hbXA?oc=5",
          "urlToImage":  "https://i.blogs.es/923a36/google/840_560.jpeg",
          "publishedAt": "2023-08-26T01:25:05Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "KapanLagi.com",
          "title": "7 Potret Pemeran Drama Korea 'MASK GIRL', Panen Pujian Karena Mirip dengan Karakter Asli di Webtoon - Kapanlagi.com - KapanLagi.com",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMilgFodHRwczovL3d3dy5rYXBhbmxhZ2kuY29tL2ZvdG8vYmVyaXRhLWZvdG8va29yZWEvNy1wb3RyZXQtcGVtZXJhbi1kcmFtYS1rb3JlYS1tYXNrLWdpcmwtcGFuZW4tcHVqaWFuLWthcmVuYS1taXJpcC1kZW5nYW4ta2FyYWt0ZXItYXNsaS1kaS13ZWJ0b29uLmh0bWzSAQA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:11:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikHot",
          "title": "5 Potret Wika Salim Siap Beri Bukti Tak Cuma Jual Badan dengan Karya Baru Ini - detikHot",
          "description": "https://i.blogs.es/923a36/google/840_560.jpeg",
          "url": "https://news.google.com/rss/articles/CBMic2h0dHBzOi8vaG90LmRldGlrLmNvbS9jZWxlYi9kLTY4OTU4NzYvNS1wb3RyZXQtd2lrYS1zYWxpbS1zaWFwLWJlcmktYnVrdGktdGFrLWN1bWEtanVhbC1iYWRhbi1kZW5nYW4ta2FyeWEtYmFydS1pbmnSAXdodHRwczovL2hvdC5kZXRpay5jb20vY2VsZWIvZC02ODk1ODc2LzUtcG90cmV0LXdpa2Etc2FsaW0tc2lhcC1iZXJpLWJ1a3RpLXRhay1jdW1hLWp1YWwtYmFkYW4tZGVuZ2FuLWthcnlhLWJhcnUtaW5pL2FtcA?oc=5",
          "urlToImage": "https://photos5.appleinsider.com/gallery/55985-113648-Main-Image-xl.jpg",
          "publishedAt": "2023-08-26T01:07:02Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Wolipop",
          "title": "Influencer Dikecam Pakai Baju Seksi ke Disneyland, Ngaku Lagi Uji Sosial - Wolipop",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMifmh0dHBzOi8vd29saXBvcC5kZXRpay5jb20vZW50ZXJ0YWlubWVudC1uZXdzL2QtNjg5NjUzMS9pbmZsdWVuY2VyLWRpa2VjYW0tcGFrYWktYmFqdS1zZWtzaS1rZS1kaXNuZXlsYW5kLW5nYWt1LWxhZ2ktdWppLXNvc2lhbNIBggFodHRwczovL3dvbGlwb3AuZGV0aWsuY29tL2VudGVydGFpbm1lbnQtbmV3cy9kLTY4OTY1MzEvaW5mbHVlbmNlci1kaWtlY2FtLXBha2FpLWJhanUtc2Vrc2kta2UtZGlzbmV5bGFuZC1uZ2FrdS1sYWdpLXVqaS1zb3NpYWwvYW1w?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:00:36Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikHot",
          "title": "Rendy Kjaernett Ingin Ajak Lady Nayoan Bulan Madu Usai Rujuk - detikHot",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vaG90LmRldGlrLmNvbS9jZWxlYi9kLTY4OTU0MTEvcmVuZHkta2phZXJuZXR0LWluZ2luLWFqYWstbGFkeS1uYXlvYW4tYnVsYW4tbWFkdS11c2FpLXJ1anVr0gFmaHR0cHM6Ly9ob3QuZGV0aWsuY29tL2NlbGViL2QtNjg5NTQxMS9yZW5keS1ramFlcm5ldHQtaW5naW4tYWphay1sYWR5LW5heW9hbi1idWxhbi1tYWR1LXVzYWktcnVqdWsvYW1w?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T00:35:53Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "InsertLive",
          "title": "Terpopuler: Ibunda Yakin Aldila DIguna-guna Indra Bekti Vs Tim Happy Asmara Kecelakaan - InsertLive",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMikwFodHRwczovL3d3dy5pbnNlcnRsaXZlLmNvbS9ob3QtZ29zc2lwLzIwMjMwODI2MDY1MzExLTctMzE3NjY1L3RlcnBvcHVsZXItaWJ1bmRhLXlha2luLWFsZGlsYS1kaWd1bmEtZ3VuYS1pbmRyYS1iZWt0aS12cy10aW0taGFwcHktYXNtYXJhLWtlY2VsYWthYW7SAZcBaHR0cHM6Ly93d3cuaW5zZXJ0bGl2ZS5jb20vaG90LWdvc3NpcC8yMDIzMDgyNjA2NTMxMS03LTMxNzY2NS90ZXJwb3B1bGVyLWlidW5kYS15YWtpbi1hbGRpbGEtZGlndW5hLWd1bmEtaW5kcmEtYmVrdGktdnMtdGltLWhhcHB5LWFzbWFyYS1rZWNlbGFrYWFuL2FtcA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T00:15:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikTravel",
          "title": "Heboh Gaji Pilot Rp 200 Juta Sebulan, Benarkah? - detikTravel",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vdHJhdmVsLmRldGlrLmNvbS90cmF2ZWwtbmV3cy9kLTY4OTY0NzIvaGVib2gtZ2FqaS1waWxvdC1ycC0yMDAtanV0YS1zZWJ1bGFuLWJlbmFya2Fo0gFgaHR0cHM6Ly90cmF2ZWwuZGV0aWsuY29tL3RyYXZlbC1uZXdzL2QtNjg5NjQ3Mi9oZWJvaC1nYWppLXBpbG90LXJwLTIwMC1qdXRhLXNlYnVsYW4tYmVuYXJrYWgvYW1w?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T23:06:21Z",
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
export default Entertainment;
