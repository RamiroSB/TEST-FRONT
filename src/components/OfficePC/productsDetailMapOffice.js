import React from "react";
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../products/ProductStyle.css'

export const ProductDetailMapOffice = ({product}) =>{
    return(
        <Container className='my-5 t'>
            <div className='containerDetail'>
                {product.map( (article) =>(
                    <article key={article.id} className='containerCardDetail'>
                        <h3 className="tittleData1">{article.Model} - {article.sku}</h3>
                            <img src={article.img} alt="img Product" className='imgDetail'/>
                        <div className="containerProductDescription">

                            <h2 className="tittleData2">Descripcion</h2>

                            <p className="descripcionCentrada">The <b>{article.sku}</b> is a business desktop pc optimized for your workday. Equiped with <b>{article.ProcessorBrand} {article.Processor}</b> and <b>{article.GraphicModel}</b> graphics. Includes <b>{article.Ram} {article.RamTechnology}</b> and <b>{article.StorageBrand} {article.StorageMain} {article.StorageTechnology}.</b> </p>
                            
                            <h2 className="tittleData">Data sheet</h2>
                            <hr/>
                            
                                <div className="containerUlLiDetail">
                                    <ul>
                                        <img align="left" alt="icon OS" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFD0lEQVRoge2aS2xVRRjHf9fW3luLtveWWpZCQYM1lQWJGuNj4aOISDUmplpXgoDKQ9SFC9SFCzUu1KSJiS7AlS4NUeQuwPqKVURNwL7UoCjiI0GlrSWFHBffN8xpOWfO45572wX/5OTenO+bb/5zZ+ab/8xcOI/5hVyGsUrAjcD1wJVAB3Ap0KT2CeB34EfgO+AT4CPgRIYcUqMAPAiUgTOAl/A5DewF+oB8jbkD0Ag8ARzzkZoC9gE7gB5gOVAELtSnqO96gGeA/VrGlP8V2I78ODXBauAHH4EvgXVAc4pYLcB64IAv3vfAqkyYhqAAvO6r8CvgtgzjdwNf++L3U4XeWYQQ95BJuxmoy7oSjbkVmMT2dntWwRcj3e0BQ8BVWQV2oAsY0TrHlENFaPMF/AJYWGnABCgiKdpD5uSitIEK2OH0GXY9qCWagM+xwyzVnDETewhZ7OYKrdhR0Z+08GrsxK7FnIhCFzYBdMct1IhdJzZXh1cqbMNO/lhD7EnsOlGNFJsW9cA3CLdtUc55RCp4wK3V5ZUKdyDcjhHRK33YDDEfkcNm0vtdjmV1Whcj6BLgFeAwcBIYR+T5q8DSiLJ1wENa3ziSVI4A7yCi0rW92KAc94Q5lBBZPUW0ANwInCJcnp8CNoWUbQDec5T1gN1I0glCUeNPh/Hs0SD7IhrxgK/CncC1iIpt0e87ffa+gPJPqe0I0KvEGhEZsgk4rvYXHBw+VJ+7gowvq3GHI0Az8Lf6Perwe0x9TnDur3ZIbdeElF2p9t8c8Z9Tn5eCjKa71zoCbCFer4FsnILWogl9vyBGjDDcjR2CAFzgMy7Tz1FHALP/eCNGZW/OKmMwpp+Pk/7MwHBcFmT8C2llqyPAL+qzJEZlHep7dNb7Ndj9/SHgYZJruYVa/s8go8lCDY4ARu/EUcJN6jsZYFuLTHZ/lnsXuJeZoyQMeew5wTmoZUNADiT6kFOU09hGDQG3RMR2NiTJ0OqIqAhkUfSAn2P4tiNJYUzLTONujHNojapxuSOAyWxOeaAwcmd3lKMPdcCL2B1pGDrVZ9i88I9HkwkudwQo6+f6GKSMzCk7vWbiDPC8fu90+BmOZzOsvyGmdVc7AuwC/gFuRtaUMGwBbkIWz7dm2czKvTKk7BX6+ZMjvuE4HGQ0EmW/IwDIEamZmLuA6xB50qzfoySKGTrHEUnSAVyEpOD7kLNhD3jawWFAfdYEGYtY0dgS0ZhHcIvGKcJFYyMyb1yi8QPC9xslrGi8JIzgXg0UZw50YGX8uD6H9V1UVsshI+BtpAcmkK1AGVkg6x1lNyrH910VGGV7IILIXCEHHEQ49roc89i14vbq80qMO7GyJ/IaYrs6H2T+HT58i3BzZcyzKGDPerdWj1dimB94hASXQquwOqmrOrwSYQXwH8Ip8VVGP/YXcOmvaqMNq8FeSxOggBwLechB8lwcYi8ABpXDIBXcM7YhMsCIuLYs2MVECfgUex1X8YXPYmzXjuDWYllhha/OUeCyrAK3Y4fZJHL26lp906IeyU5mYg8id/WZooBNAB5yoJzV7WsOucow64SZ2FW9e+/Gdrs5td+AiM6kKCHaycgOM5SyvC12ooAMLyNnzAHCAPAscu7UiaTtBn1akUuje9RngJkK+iiyYs/JPyDyyLZ3DzMPEOI+08j2uZcKG5Dln2qakT/V3IDs+5ci6fpitZ8E/kBS6TDwMdIr/2bI4TzmDf4HEpmdTSPSj/kAAAAASUVORK5CYII="/>
                                        <h3>Sistema Operativo:</h3>
                                        <li><span className="textoCeleste">S.O: </span> {article.OperatingSystem}</li>
                                        <li><span className="textoCeleste">Version: </span> {article.OperatingSystemVersion}</li>

                                    </ul>
                                    
                                    <hr/>
                                    
                                    <ul>
                                        <img align="left" alt="icono motherboard" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAC7UlEQVR4nO1b227DIAx1p33VtO7j1/S32j1smYjj2zGEXJojIdXBGMLl2BBKdOLEiDsRPXeUbkDbS90J3orfH7F+2gyexe+Ho/sZNfh0tfYH873etIwDQlwOr9QBI9TZwKfKnTCikYjJknshvLS5oiZ7KWpvhNQxXudFynj1EhHRu5ZBRINS8FIYlmQUD6Es90ierNkpMeYNRHTVFDwDyAhHZ0CLuiK2xvQdrbS2UZlGZ4Ixj1fMei9MsXx2p99pdVXya2WtsRlEbIo6lhv01hSKgeTRKkd9xCWYRkRmg6hjkaBIFBXQ7HlhLILIgIXjAC+/JVFpZSROuBn6EZtQ5VZlqBwJhKKxh6YfsTlBTw7Q7EkcwMHXPEfUI8zwihwwgeUGNeMt3V60Do6Ma4XdYOvNS8beIDxruqHaOgdcae77vwQ9JA5Q9dZygzfWOKTTI3G+6Um2ygEoEA6YyFvjAGnNe2jWxtop3jIy7GZrC2eCrWZayo4VCGngPe/JHiTvwE+jPFmzA4FPlRtNWVViay/x8uppzIIILx/UBe0Fm+eAVXF2QFDPO5jw8lHbtSnlVSwOMMPJQL6FDLki5OuRu6pINB+d6AtXj0ZDmIPhLYEWhxW78SyWn265BHrcRLHOMlMRo7ROvSAJ7czWidenyd2BNnBRudwL8E9hvYDG/ZF9QQrSWumxJlsjzU/Rgq3XZGtE3uOfnyLbYeRIS2sQ8nwpwMfiSyFz7IWiSSgc4QRtP9BzzXsw60dmgHQvp7yBWUaNq/pZBdrAzRSyslfxiLUiQZGUre8CqGx1gFRuaYTanSFBbeQ1DrAaeFlQDgE5FR5ofuu6fNEsB/SKBF2dpQKW3QdCR0E6EMowb+TaSy27a94EgtUBaMRWVs5PksqG10SCVh1afWVZKA44Ck4O+EOaA9C7+96ZW629pn/EiMwA/tUVlTnQ/wJk/juQQi8OqN1zoHGFmf/y3walzdBR4ZJgj5OatbD257kTm8UP2MFZ40kDDosAAAAASUVORK5CYII="/>
                                        <h3>Motherboard:</h3>
                                        <li><span className="textoCeleste">Marca: </span> {article.MotherBoardBrand}</li>
                                        <li><span className="textoCeleste">Modelo: </span> {article.MotherBoardModel}</li>
                                    </ul>
                                   
                                    <hr/>
                                   
                                    <ul>
                                        <img align="left" alt="icon proccesor" src="data:image/png;base64,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"/>
                                        <h3>Procesador:</h3> 
                                        <li><span className="textoCeleste">Marca: </span> {article.ProcessorBrand}</li>
                                        <li><span className="textoCeleste">Modelo: </span> {article.Processor}</li>
                                    </ul>
                                  
                                    <hr/>
                                   
                                    <ul>
                                        <img align="left" alt="icon storage" src="data:image/png;base64,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"/>
                                        <h3>Almacenamiento:</h3>
                                        <li><span className="textoCeleste">Main Storage: </span> {article.StorageMain}</li>
                                        <li><span className="textoCeleste">Marca, Modelo: </span> {article.StorageBrand}</li>
                                        <li><span className="textoCeleste">Technology: </span> {article.StorageTechnology}</li>
                                    </ul>     

                                    <ul>
                                        <img align="left" alt="icon ram" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAACj0lEQVR4nO3au27UQBSA4R8UpaFLBQRCQVpeIOGdIM9ASAglUOQBEC8AHQgIK56AlCm4JeISKrZgaULhsXbZiy/r8QX2/6SRvfHROd4ZecbeGCRJkiRJkiRJkiRJkiRJkiRJkiRJ6oRlYA84Ac5sldoxsBv6dG73OvBF/re2U2oExhyHJBtVkgiATYZXytzSUVUcuf15vmKBHWDA7MtzAGwvcHx0eSM6AFYyjq8AvxY4flzlGScvQZHkZzP2FyF+2rFap6wiDhuosTDSEX0IXJ5xvGy+MjF1x7+rOX9qFXhEhCmrN5LkI7BWoPi4o5LxbU4pdeS/Bnxi2I9vStafsAo8C8ke5xTPO8GuxRdRNf+T8LenJH0ZxdWQ9EtO8WlGp4WuDcjRzKg4+QG+hr8VGowmFvUbDdSY1/UGa50rElRkQK4A+2H/+RwnUmThbEsTd4AvwnafpC8rectwMXpPMnWN6toU1MU1ZA34wLAfeyXrTyQ/Ax4AFwsUzzvBrsU3sYYAXCJ5dPBJveX4acdaf1JXCVUH5Df5P7YNFjg+urxLbJv8n6PvZMSP3uUcFogvm79MfHouhxHzj6t9DVE50deQdeA10Adehc/6W619ND6iB8At4AJwO3zuoiXgPvAd+Eby5sxSQ7Wz+ij6lNUPhQjbfpXkNdpjcn7fbah2Vh9FH5ADYCsU2iK5NMf9YPai13TbYPi2Rx3tdMr3z+qj6AOyTjIv/gReMn1+nPUg1fR+3ufY+6msPmrlLmvRByRL5busk7DdLFlYk26GbaUX5XZpfx2o0lJtn8dou1uw76daJhmU9JXSf6mN/u+6V2Odou0zyWBUetlakiRJkiRJkiRJkiRJkiRJkiRJkqRI/gBIBAcuWQ8FYwAAAABJRU5ErkJggg=="/>
                                        <h3>RAM:</h3>
                                        <li><span className="textoCeleste">Ram: </span> {article.Ram}</li>
                                        <li><span className="textoCeleste">Technology: </span> {article.RamTechnology}</li>
                                    </ul>                   
                                    <hr/>
                                  
                                    <ul>
                                    <img align="left" alt="icono graphic" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAADxUlEQVR4nO2by29NQRjAf1T1ShQJ6ZJ6LKSsJGqBlSpiw0L4L2hYeXbhEWLVFYm919JaoloiISwI8SpaYimhUZSymO/knnvMOb1zZm7Pvb3fL5ncMzPffHPmO9+8zpkLiqIoiqIoiqIoiqIoiqIoSlDWAHeBSeDvLA9vgA1hzFZmqA4aNpPhC7A5iOWEyPMWhlRah7QCVzFtHQe2h1IcPZlmoAW4gmnvd2BZCKXNZECAOcAIps1rswTnelRyFvhJ2bg/gTMWmXFLer0TtSeowqQHxo0XhR8JmW+S/jWRPiQBoAv4BOyV+DHgBdAOlIDnQL/k7RHZrpieNOJ5N4FbGXGbnhfU2APnW9LaEvEBjAcOWGSTDySKt8r1pFzPkWvkulri+ktUPtxkvObYPDBtCTBbqLkH/rKkBR03GgEfA16k0oi/JE2xUGT3LAGngNeYcWsEuAF0J+Q2YSaHEZF7BZyQ8nmIuvC6nOUrKMqAC4Bh7GPtH6BP5A5L3CY3RD4jDkr5+8Ci3C0QijJgv9T7HrOtKgGdwHnMzDwFXKY8a5+T/BLQC3yQvJM56u4E3kn5B8Bil8L3cN+AZ63J8vJGdG+z5O2P1T0F7LPI9Ej+q5z1r6C8Ixl0KZj3LUZoosV62kuMJ5L/OCW/HfsC34Xl5Gifa4FaGTDywB5L3gEqPXC/RaYXPw+MaFgDnhK9H4AdmEllFXCB8hh4SX4nMWPjSpHbAYxK+RNV1pe2dy/MgFljaTVjZgnzJjxtFj4ocn2kz8KDVD8Lp+3dCzNgiDGzDTgOvAQmgLfANWBjQq4buC75EyJ/lP/351mcwRjxdEo7qia0AX31F03q/fps5RTUgN6oAT2ZzoChFtAu8nl2QSFDkB1Vnu/Adx312OTJUW8tQto95WYmZ80iZ2hnA+oY6Ika0BM1oCdqQE+yDBhfTkS4TP+7gY/AGLDLIa+aumZq9vXC9wbGYumjDnlFH6WzLa9SDTzPlpigmtMAIZ/e1oC6CsXFrW2yuzCeNgrsdMirR3J1cV8DziZ0IV0lQY/jNaMHOr/SVw+sJOs4njMhPLBRT6jG6cBzEvFZiKZ1CRvRQnwJ5jvuEYlvAT7LL8AhzPfipYlyWTrBfip1und/HcBTTBse2gSyuvDwNMqT2G7GpUtED6BF7ut3itw8zHfgPw46wX4qNcurOoDbwHrgGWb3lJvZMkm48AjT5qcYY3rRjAaM2uxtPCj/U6k9hLIGIajTpB2vaIYQhNXAHZrj35rxkPbhS1EURVEURVEURVEURVGUJuQf7CEpReNwLMwAAAAASUVORK5CYII="/>
                                        <h3>Graficos:</h3>
                                        <li><span className="textoCeleste">Marca: </span> {article.GraphicBrand}</li>
                                        <li><span className="textoCeleste">Modelo: </span> {article.GraphicModel}</li>
                                    </ul>
                                    <hr/>
                                   
                                    <ul>
                                    <img align="left" alt="icon case" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA3klEQVRoge2YQRKDMAhFaaf3v7LdSBc6GRApIPy31RiYJyIhArV43Vy/uUQhI8b5jogiAqsRNnHXqHYfZrnfWCNRNcFwfOIb0MbIx7guujZExhthvGvGbBpGDqT/IbQxgkSqgUSqgUSqgUSq4dXZo+eUEzCy8++5RE0bI0+Z2Vf7/663MaKtkahzLO3+pzdjjJFj5ln9Ys7Zr7ZGsmtDZJwRK1drCudaFiNXeop0j1t/Gm3E8wvm9qxxRtInwJ1lTbUxsmKjOhaIFPG0NfI4E0wbI9JMnI26z7QxAqrxBS0GH2TqfoEoAAAAAElFTkSuQmCC"/>
                                        <h3>Case:</h3>
                                        <li><span className="textoCeleste">Marca: </span> {article.CaseBrand}</li>
                                        <li><span className="textoCeleste">Modelo: </span> {article.CaseModel}</li>
                                    </ul>
                                    <hr/>
                                   
                                    <ul>
                                    <img align="left" alt="icon supply" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFUklEQVR4nO2bz28dNRDHPy+/qqRBtEhEIRckKERQwR8A4UfJpWeEyAUlcOp7oJQLd1pxAAn+AHpriBC5lSsFiSYNTZDgQKuUFE45pBAQgrRVkSI1j4PHXe/Gu7b3efNeQr6StW/t8cx41jO2xwkc4ABVoRtYAOaBLqO+C7gkxad+z2ISaEo5YdS/EljfUfiOREldLlvouoFfDJoZo20msD6GPtGQFaZLFvrrrwPbwB3gASl3pM6nPpY+0ZAVYBNoKjKF8ukm8JaUJiouzHvU9wCLOXJ89SlETwhxIBaBz1EB7SXgTaPtvDxfLKifQs2G5yvU0Qs2P8srNv8LnfZm/brwnYyoTzB8hRVNPzPAnQ+s/5X0TI2hTxB8GRXRhS59Zr359WPpE4SiQOcrsIskwGU3P99KsW2KFtgZp/akAWIiqgFCVwHboAFqgXxiIW+A3vqY0y4vupZRqsoSQ5/7q0MtQ1gEG21I/9hwfWWv8dhcIMs4dGBVu0Or+qT6l90Jtsvno6OdU7jdqME+STy0Ap8YsN+Qmun/+xnQDgN8Tf4af7EN+tzHbmxlh3FvdIYr1iE1zqpmQC/Qb6k/Ls9FVKwxy2KGxsSA8IyOKgwwAvwE/A68kWl7Wp7XLf1WMjQak8BvwnMkko5WxHCBEeAG6Sk9g8ry1IBZqXvXIvO0/J4V2iPAXIbXDVo3Qu44WzWAOfgfgDpwiySrs2rI0MkPU+bLxvsqsCa/bwEN4RnDCJUYIDv4o1L/OLBk8N4AzmB3vS5p2zDol4Fj0n6UOEaIboBelE83gR9JBn8SGEJtturABHDIg1+f0DaE95DwgrQRVih3lolugAFgU/rWpe4ksAVcI/+Coxt1Ll8o4D0oPLZIjHBKZG1iX2lcqMQFpqTvbeBJ4GHgKvBxQZ/XPGV+APwMPAI8RmLsbLLUF5UFQR2xl1FTc9BBb8YGFwaFp+7zRXk1qzPAEZLIXXfQjhnyfGXWhXZNZJVFZTvBf1AuoH8X4b0S/P+W578oN4iOMjNgGBgHpoHPpP8fFEf7UeAecDdQZh/JEjkrMscJPztEc4GLpKexLmcd/c4J3aclZJ7JkflVAI+UTFem18UI1CFmBbUXuIa6/dnO6TOE8uE+4CnUhsaGedTOMAt90/ws6sxwnOT2OFTvHfShX6OMy5yVPhfk/TL2L7oawHM7UI9oLpCld/UfAP4UmudyaK5IeyOiXFf/aIxc/d+R9u9z2vXS+BdwOKJcV//4jHJgngbNoq+pLuAXRFvVo5IgeB0VCIuC4CVUALNhFLXd3QIeRS2lNugg+AxJEBwrqXfLQTBvGXw/gIfuo5fEcw766MugV0MBzI2QzvZsoJa5EGXuojZHowW0h+iwjVAWNRI/nwhUpgl86aCdIFkiW7m8qewscBh1xgd4sET/TxztD8mzvyR/J1qdAfovu67gdxw2ZS456AZR2aFloZ8rr2Y1LvC69L0NPIHa8l7F/VW1zFcLaDo+IdJvKHVK6syUWNFM+Aa1bHbntNtSYg2R1TEpsR7UHqBJOiOsk6K9wNuoIOazOuikaF14d3xSFPLT4sdI/FYvkXlp8W52psWXUNMeOjgtrpE1QoPkYmSN9FZYH3VNmSeM9+zFSJ0OvxjRsF2NzaFyeObV2GmLzD1/NaYxgjobbKLS5SamSba+WehM0XSmflJ4rRDncrRyA4AKTrYIPU76BGhCJ0fGLW39xPvfBm8DhL77oIo/kIim924YAPJPkU3CTnVl9dwVF+hk5B6GbspzjP2LF+R509b4EW7/3C/lQ5sB+sQI64HM9lJZlzH6JmwOsO/xH9yYcuZHe04mAAAAAElFTkSuQmCC"/>
                                        <h3>Fuente:</h3> 
                                        <li><span className="textoCeleste">Marca: </span> {article.SupplyBrand}</li>
                                        <li><span className="textoCeleste">Supply: </span> {article.Supply}</li>
                                    </ul>
                                    <hr/>
                                  
                                    <ul>
                                    <img align="left" alt="icon mouse" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEOUlEQVR4nO3bW6hWRRTA8Z+mpaVGiJrd7EZGSYL6YFEoEdGbJT1EvRhCRi89REUlUQg9FfUg3RQEX4OiBwMj0kxfCoIiMkzsapZyMrt6OXp6mPn4vmOd48y+fun5w2HOmb1m1tprz94zs2YdznDGlWh7Fa6oypCCHMa3+L5pxdOi8qE++fkEtxW5kaIjYDxewZUF21fFFNyAc3ECq7C+VYta4Gw8J4yEo7iuXXPaY4PghDNuBHRYLDjgq5xG4+uxpRX2xnJaTqPTyQGLYvlNq1a0xHnYKbwCj+U0LLMQKsNEzMQ5JfuZhIV4GldjFxbgz5L91sZcvIG/VL8Y2ik4IYsmR8CteFtYvMB+/FGyz0F8F/tdL6xO+5IZGBCe1JuY0645zfOMcPPbnF4zTzI7BAcsa9uQk2nqaVwYyy8a0pfMhIr7myfszmYJm5QOF8RyJQ721P8s7Od3CBuZ/yVThHl4j+JT2CFsxDUN2156GrwLrwqLGtgnfOh+NPyJPojzo+yhnvpZwohZEP8exIt4Mv7e1zwlBCGG8AGWGNmhX0e5y0e4PkcIsByNcpsxtUpjq2alYOggHk+QP5UDOiwWRs8Q3sFZJWysjYXCkzqBexPbpDqAEGY7oMDGpineF4x7PqNNjgPg9ij/K6ZnWVcznajLfnmBh1wHwKbYZnVGm2xyF0LLY7kRv1Vsy8msjWVfrR4/Fp7KkkT5ycKrciS224r5iW0nCdvmE/poRuh8oWcnyr/l34ueg9J3g50oz7V5ZtbHoGBQyvQ0P8oOxN+nCvv2IbyQqG9blL8l29JEcr8BnRs/niB7fSw341P8jpdj3bxEfR09ta0H6twNdjZDR3rqjpx0rXWK7gZfS5AZbWMzN7GPuWnmFKeoAx4oqXd2BX1UQlEHrEqQuRErRri2S9qH8BEtbJFHozOVpbAiym7oqVsa67Yk9rElyi9NNTCXOj+CA7Gc2VM3K5a/1Kg3i6pDYr18JMTp78Cz2I018drWGvXWSs4rAA8Jc3nvSvBD4WgshdpfgTpHAGHh8xnuEQKj27FOH4W76nYA4aa3N6CnEGfkKU0vYw5o24C2GXNA2wa0zZgD2jagbcYc0LYBbTPmgLYNaJtcB3TS0CZVbcgIdPTUlv6W64B9sUw9GCnLRbHcO6pUCXIdsCeWi0aVqoaZuEQ4HvupLiW5DtgUy+WjSlXDMsG+93CsAX1JXCYkRxxT73ndRCFyPIT7atRTiLW6kd3U0FYuq6OOz/VhmswM/CAYuE71Bt4txBEHhQTrvmSRbsr7JsND30WZgCd0g6iPVtBnrdwsZHoOCdkia3RPhHOYjvt1cwGOazA5qmyi5By8hDt76g4Ir8jAf7boMhkX41Ld1+hLPIx3S9rVODfhdWG+zk2TPSzkBK7QTJR6GFX/x8g44fhrtlOnt/0trPD2GZ5DMEaT/APmpCoXQsUtMQAAAABJRU5ErkJggg=="/>
                                        <h3>Mouse:</h3> 
                                        <li><span className="textoCeleste">Marca: </span> {article.MouseBrand}</li>
                                        <li><span className="textoCeleste">Modelo: </span> {article.MouseModel}</li>
                                    </ul>
                                    <hr/>

                                    <ul>
                                    <img align="left" alt="icon keyboard" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABnUlEQVRoge3YMU8UQRjG8d+dFDQqNXcUJkhICPYUFvYW9tR8D/wMFNpbGUKFFlDpJyCBykQba0/uiLHCLMXsHRdzkNu93M0smX/yZu4mO7vPs7P77puXTFo8ii1gAm08w1P0I2uZiS4K/KyyqD0fLTOxUo6XVRalaGS7HH9UWZSikdfl+DWqihl5iWv8xWpkLbVYxz7+CC/627hypmMTezjAF+GlLsbiHVrR1E3BlvDcFxPiN47wqu7JF+V8Byd4jAFOcYYLnKv4zYjFMr4Ld/4DnsSVU59dwcSZOZZEi/iOvCnH9/i3gOvNjW/CjrxYxMW6OMSVyVklxbgSMt3zcRO9BITVjR46yp0ocDycaAgdfBK0f+T2cWqSiSFrgvZ+q/xB4mXBPRSkWcbXYumO+eK//61E50c8mB3JRlIjZ63UmDZrjRMrU006ZsSD2ZFsJDVy1kqNedVaVcm11pBsJDVy1kqNttB8ILSFmsZaOQ4ITa5CaK00yUwXnwXth7CBX+I32mZp0K0P3XWEJtcgAWHTxqDciZGJTCaTaQ43WK8NPPMLkRwAAAAASUVORK5CYII="/>
                                        <h3>Teclado:</h3> 
                                        <li><span className="textoCeleste">Marca: </span> {article.KeyboardBrand}</li>
                                        <li><span className="textoCeleste">Modelo: </span> {article.KeyboardModel}</li>
                                    </ul>
                                    <hr/>
                                </div>
                        </div>
                                <br/>
                                <Link to={ `/products` }>
                                  <button className="buttonMoreInfoProduct" type="submit">VOLVER</button>
                                </Link>
                    </article>
                    )
                )
            }
            </div>
        </Container>

    )
}