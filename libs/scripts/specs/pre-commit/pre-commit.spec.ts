import * as preCommitUtils from '../../src/pre-commit/utils';
import * as preCommit from '../../src/pre-commit/pre-commit';

jest.mock('../../src/pre-commit/utils', () => ({
  execCommand: jest.fn(),
}));

describe('Should run pre commit script', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Should run pre commit script successfully', () => {
    const mockUtils = jest.spyOn(preCommitUtils, 'execCommand');
    mockUtils.mockImplementation();
    preCommit.runPreCommitScript();
    expect(mockUtils).toHaveBeenCalledTimes(3);
  });

  it('Should throw error', () => {
    const mockUtils = jest.spyOn(preCommitUtils, 'execCommand');
    mockUtils.mockImplementation(() => {
      throw new Error('test');
    });
    const mockExit = jest.spyOn(process, 'exit').mockImplementation();

    expect(preCommit.runPreCommitScript()).rejects;
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});
