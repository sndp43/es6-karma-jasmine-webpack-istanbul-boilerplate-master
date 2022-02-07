import { sayHello } from '../src/module';
import * as obJ from '../src/module2';
describe('module', function () {

    const hello = sayHello('World');
    const hi = obJ.sayHi();

    it('should display proper hello', function () {
        //Assert
        expect(hello).toBe('Hello World!');
    });

    it('should display proper hi and spy on LogMsg', function () {
        //Arrange
        let spy = spyOn(obJ,'LogMsg').and.stub();       //stub is not working and its calling through
        //Act
        let result = obJ.sayHi();  
        //Assert
        expect(result).toBe('hi');
        expect(spy).toHaveBeenCalled();                 //failing this condition
    });

});