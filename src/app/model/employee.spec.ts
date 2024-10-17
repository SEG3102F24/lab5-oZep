import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee("andrew", "1990-01-01", "London", 1000)).toBeTruthy();
  });

  it('should have correct name', () => {
    const employee = new Employee("andrew", "1990-01-01", "London", 1000);
    expect(employee.name).toBe("andrew");
  });

  it('should have correct date of birth', () => {
    const employee = new Employee("andrew", "1990-01-01", "London", 1000);
    expect(employee.dateOfBirth).toBe("1990-01-01");
  });

  it('should have correct email when provided', () => {
    const employee = new Employee("andrew", "1990-01-01", "London", 1000, "male", "andrew@example.com");
    expect(employee.email).toBe("andrew@example.com");
  });
});
