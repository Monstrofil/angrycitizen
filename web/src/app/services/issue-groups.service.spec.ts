import { TestBed } from '@angular/core/testing';

import { IssueGroupsService } from './issue-groups.service';

describe('IssueGroupsService', () => {
  let service: IssueGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
