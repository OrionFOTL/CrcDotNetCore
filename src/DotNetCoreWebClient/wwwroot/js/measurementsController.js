class MeasurementsController {

    constructor() {
        
        this._service = new MeasurementService('http://localhost:56771/')

        this._newMeasurementSection = new NewMeasurementSection()
        this._measurementListSection = new MeasurementListSection()

        let _this = this

        this._newMeasurementSection.addEventListener(new class {
            newMeasurementAdded(e) {
                let data = {}
                data.name = e.name
                data.value = e.value
                data.createdBy = 'Operator'
                data.createdAt = '2019-04-15T09:11:40.019'
                _this._service.post(data)

            }
        })

        this._service.addEventListener(new class {
            getResponseReady(e) {
                JSON.parse(e.data).forEach(i => {
                    _this._measurementListSection.addNewMeasurement({
                        id: i.id,
                        name: i.name,
                        value: i.value,
                        createdBy: i.createdBy
                    })
                })
            }

            postResponseReady(e) {
                _this._measurementListSection.addNewMeasurement(JSON.parse(e.data))
            }
        })

        this._service.get()
    }
}

(() => new MeasurementsController())()