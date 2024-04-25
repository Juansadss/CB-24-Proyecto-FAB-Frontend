import './Performance.css'
import '../main-menu/main-menu.css'
import '../../index.css'
import { LuUpload } from 'react-icons/lu'
import performanceImage from './Images/performance.jpg'
export default function PerformanceForm() {
    return(
        <div className='main-menu-container performance-container'>
            <form action="POST">
                <div className='performance-form'>
                    <div className='left-side-from'>
                        <div className='aircraft-select form-group'>
                            <span>Aeronave</span>
                            <select>
                                
                            </select>
                        </div>
                        <div className='performance-img-upload'>
                            <img src={performanceImage} alt="" />
                            <button className='btn btn-dark-blue'><LuUpload></LuUpload></button>
                        </div>
                        <div className='details'>
                            <div className='details-input flex'>
                                <div className='form-group'>
                                    <span>Temperatura</span>
                                    <input type="number" name="temperature" id="temperature" />
                                </div>
                                <div className='form-group'>
                                    <span>Altitud</span>
                                    <input type="number" name="altitude" id="altitude" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='left-side-from'>
                        <div className='form-group'>
                            <span>Tripulacion alterna</span>
                            <input type="checkbox" name="alternateTripulation" id="alternateTripulation" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}