import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './estilosEfectivo';


const Efectivo = ({color}) => {
   
    return (
         <View >
             <Text style={{...styles.titulotransferencia,color:color.text}}>Desde cualquier centro de recarga</Text>
             <Text style={styles.parrafo}>Acercate a una de estas sucursales y pediles que busquen Quiqueapp en su sistema. Deciles tu DNI, pagá y listo. Es gratis y se acredita en el momento.</Text>
             <View style={styles.contenedorimagenes}>
             <Image style={styles.imagenpunto} source={{uri:'https://i.pinimg.com/600x315/8a/96/20/8a96208f733d02d457070e3bc632023a.jpg'}}/>
             <Image style={styles.imagenpunto} source={{uri:'https://es.jumpseller.com/images/support/pagofacil/pagofacillogo.png'}}/>
              <Image style={styles.imagenpunto} source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUQEBEVEQ8VFRgSEBEXFxUXEBcWFxEdFxgZFR8YHCghGBslGxUYJDEhJSkrLjMxGiAzRDMsNygvLisBCgoKDg0OGxAQGzImICUyMDItLTAvLS0tLS0tLS0tLy0vLS0tLS0tLS0tLS0tLS0vLS0tLS0tLy0tLS0tLS0tLf/AABEIAJ8BPgMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQIDCAH/xAA6EAACAgIABAQEBQIDCAMAAAABAgADBBEFBhIhBxMxQSJRYXEUMoGRoSNCYnKiM1JTgrGy4fAVJCX/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAgEG/8QAMREBAAICAQMCBAQFBQEAAAAAAAECAxEEEiExBUETUWFxFCIykaHB0eHwFSMkQoGx/9oADAMBAAIRAxEAPwC8YCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcesRqXm4coekBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQNDzpzB/8AH4b5IUWOpRUrLdIJZwO50fQEn9JY42D42SKIsuTortofDXmrJ4kci3I8tKUKJUiAj4jstssST26f3ljncWmDpim5lHgyzfcynbMANnsPc+0z1l0U5tTnpSxGb5Kyk/wZ1NLR5h51Q7bbAqlm7KoLE/QDZnkRudEzru8+8gF83jNVjE6NtmTYNnQ0Gcf6ion0nMiuLizHvqIZuGZtleg2cAbJAA9SewnzURtpTOnVRmVudJYjn3CspP8ABnU0tHmDqh3zl6QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAGBQvi1wA42V+IfIFrZVljrWKyvQidIAJ6z1aBUegn0XpuaL06Irrp92byqdM735Z3IHh02TXjc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PErw9tzLvxmGVNrKFuqY9PV0jQZCe29AAg/KQ8Dn1xV6L+PZ3n483ndUZ4RyFxkqcfrbFxmPxg3f0+/r8NbHq38u25by83i76tbn7IqYMvj2ceKeFOcLXXHRWoB1W7WKHIAA6iPbZ2dRT1XF0x1eS3FtvssrnXgd93C/wWIo69VV6LBQErIJ7/8AIB+syeLmpTP8S/jut5aTNOmEM5C8O8zGz6sjJRFqr6mGnDHqKFV7D/MT+k0OZ6hiyYppTe5V8PHtW25XBMReRbnzk9OKUqvV5d9ZJps1sd/VWHup0PtofY2+Jy7ce2/MT5Q5sMZIVdX4UcSD6HkqP+ILTrX00vV/E159UwTHif2U44t2s534HRw41YiP52Vo25VvoAW10Io9hrZ79zsH30JuHmvm3eY1HtCPNStNRvusfwQwejBsuI723HR+aooUf6uuZXq195or8oXOJXVNtNz94Z5FmTZlYQWxbWL2VEhXVz3YrvswJ7+u9n3ljh+o0rSKZPb3RZuNMzurA4P4fcWvVcfJtfHwgR1IbesdO/REViP37CSZedxqzNqRu32c0wZJ7T4dOL4XZwyVLVoMcXAn+qpbyhZv9T0z2/qeKaTHfev4leLaLJ14qct5fEKqUxegpW7WOjN0sW1pSvbXYFvUj1mf6fyMeG0zf3WeRjteNVVtbyXxor5Rrvav06PPU1fsbNfxNWOXw/1Rrf2/spzizTGkl5J8LLUuTIzyqrWwdKFPUWYHa9ZHYAEb0N7/AINTl+p1tWaY/f3TYeLMTuy3pirxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQK38Xa89jjthJf019bvZST1BjoKNKer06vbXeanp04fzRkmO/zVeT19pqgL838a15ZtyAfTXkgWf9m5pfheH57fv/dWnLm8OPAeQ8/Pt6rK3prY9VuRcGDdz3IDfE7H9vrPc3OwYa6r3n5Q5pgvee6/OEcOrxaK8eoarrUIo9+3ufmSdk/efN5Lze02nzLTrWKxqGZOHRAQEBAagICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHyB9gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB//2Q=='}}/>
              <Image style={styles.imagenpunto} source={{uri:'https://sitio.osam.org.ar/wp-content/uploads/2019/10/pronto-pago-1024x410-300x120.png'}}/>
             
             
             </View>
            
         </View>
    );
}

export default Efectivo;
