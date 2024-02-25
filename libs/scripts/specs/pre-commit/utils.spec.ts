import { execSync } from 'child_process';
import { execCommand } from '../../src/pre-commit/utils';

jest.mock('child_process');

const mockExecSync = execSync as jest.MockedFunction<typeof execSync>;

describe('Pre-commit', () => {
  const logSpy = jest.spyOn(console, 'log');
  it('Should able to find success', () => {
    mockExecSync.mockReturnValueOnce(Buffer.from('Preview command output'));

    execCommand('command');
    expect(logSpy).toHaveBeenCalledWith('success');

  });

  it('Should able to find error', () => {
    
    mockExecSync.mockImplementationOnce(() => {
      throw Error('error');
    });

    try {

      execCommand('command');
      expect(false).toBe(true);

    } catch (err) {

      expect(err).toBeDefined();
      expect(logSpy).toHaveBeenCalledWith('failed');

    }
  });
});
