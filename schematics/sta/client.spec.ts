import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainAndModuleApp } from '../utils/testing';

const SPEC = {
  openapi: '3.0.1',
  info: {
    title: 'Title',
    version: '1.0.0'
  },
  tags: [
    {
      name: 'user'
    }
  ],
  paths: {
    '/user': {
      get: {
        summary: 'Info',
        tags: ['user'],
        responses: {
          '200': {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {}
                }
              }
            }
          }
        }
      }
    }
  }
};

const SPEC1 = {
  openapi: '3.0.1',
  info: {
    title: 'PaiApi',
    version: 'v1'
  },
  paths: {
    '/my': {
      get: {
        tags: ['my'],
        operationId: 'get',
        responses: {
          '200': {
            description: 'Success',
            content: {
              'text/plain': {
                schema: {
                  $ref: '#/components/schemas/DefaultResponse'
                }
              },
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/DefaultResponse'
                }
              },
              'text/json': {
                schema: {
                  $ref: '#/components/schemas/DefaultResponse'
                }
              }
            }
          }
        }
      },
      post: {
        tags: ['my'],
        operationId: 'save',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/MySaveRequest'
              }
            },
            'text/json': {
              schema: {
                $ref: '#/components/schemas/MySaveRequest'
              }
            },
            'application/*+json': {
              schema: {
                $ref: '#/components/schemas/MySaveRequest'
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Success',
            content: {
              'text/plain': {
                schema: {
                  $ref: '#/components/schemas/DefaultResponse'
                }
              },
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/DefaultResponse'
                }
              },
              'text/json': {
                schema: {
                  $ref: '#/components/schemas/DefaultResponse'
                }
              }
            }
          }
        }
      }
    },
    '/passport/login': {
      post: {
        tags: ['my'],
        operationId: 'login',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LoginRequest'
              }
            },
            'text/json': {
              schema: {
                $ref: '#/components/schemas/LoginRequest'
              }
            },
            'application/*+json': {
              schema: {
                $ref: '#/components/schemas/LoginRequest'
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Success',
            content: {
              'text/plain': {
                schema: {
                  $ref: '#/components/schemas/LoginResponseDefaultResponse'
                }
              },
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/LoginResponseDefaultResponse'
                }
              },
              'text/json': {
                schema: {
                  $ref: '#/components/schemas/LoginResponseDefaultResponse'
                }
              }
            }
          }
        }
      }
    },
    '/passport/check': {
      post: {
        tags: ['my'],
        operationId: 'check',
        responses: {
          '200': {
            description: 'Success',
            content: {
              'text/plain': {
                schema: {
                  $ref: '#/components/schemas/BooleanDefaultResponse'
                }
              },
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/BooleanDefaultResponse'
                }
              },
              'text/json': {
                schema: {
                  $ref: '#/components/schemas/BooleanDefaultResponse'
                }
              }
            }
          }
        }
      }
    },
    '/passport/logout': {
      post: {
        tags: ['my'],
        operationId: 'logout',
        responses: {
          '200': {
            description: 'Success',
            content: {
              'text/plain': {
                schema: {
                  $ref: '#/components/schemas/BooleanDefaultResponse'
                }
              },
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/BooleanDefaultResponse'
                }
              },
              'text/json': {
                schema: {
                  $ref: '#/components/schemas/BooleanDefaultResponse'
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      AdminUser: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32'
          },
          name: {
            type: 'string',
            nullable: true
          },
          pers: {
            type: 'array',
            items: {
              type: 'integer',
              format: 'int32'
            },
            nullable: true
          }
        },
        additionalProperties: false
      },
      BooleanDefaultResponse: {
        type: 'object',
        properties: {
          msg: {
            type: 'string',
            nullable: true
          },
          status: {
            type: 'integer',
            format: 'int32'
          },
          result: {
            type: 'boolean'
          }
        },
        additionalProperties: false
      },
      DefaultResponse: {
        type: 'object',
        allOf: [
          {
            $ref: '#/components/schemas/ObjectDefaultResponse'
          }
        ],
        additionalProperties: false
      },
      LoginRequest: {
        required: ['name', 'pwd'],
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          pwd: {
            minLength: 5,
            type: 'string'
          },
          captcha: {
            type: 'string',
            nullable: true
          },
          _password: {
            type: 'boolean'
          }
        },
        additionalProperties: false
      },
      LoginResponse: {
        type: 'object',
        properties: {
          token: {
            type: 'string',
            nullable: true
          },
          user: {
            $ref: '#/components/schemas/AdminUser'
          }
        },
        additionalProperties: false
      },
      LoginResponseDefaultResponse: {
        type: 'object',
        properties: {
          msg: {
            type: 'string',
            nullable: true
          },
          status: {
            type: 'integer',
            format: 'int32'
          },
          result: {
            $ref: '#/components/schemas/LoginResponse'
          }
        },
        additionalProperties: false
      },
      MySaveRequest: {
        required: ['email', 'mobile'],
        type: 'object',
        properties: {
          mobile: {
            type: 'string'
          },
          email: {
            maxLength: 50,
            minLength: 0,
            type: 'string',
            format: 'email'
          }
        },
        additionalProperties: false
      },
      ObjectDefaultResponse: {
        type: 'object',
        properties: {
          msg: {
            type: 'string',
            nullable: true
          },
          status: {
            type: 'integer',
            format: 'int32'
          },
          result: {
            nullable: true
          }
        },
        additionalProperties: false
      }
    }
  }
};

// https://petstore3.swagger.io/api/v3/openapi.json

describe('Schematic: sta', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  async function run(spec?: unknown): Promise<void> {
    tree = await runner.runSchematicAsync('sta', { spec: spec ?? SPEC }, tree).toPromise();
  }

  beforeEach(async () => ({ runner, tree } = await createAlainAndModuleApp()));

  it('should be working', async () => {
    await run(SPEC1);
    [`_base.service.ts`, `models.ts`, `index.ts`].forEach(name => {
      expect(tree.exists(`/projects/foo/src/app/_sta/${name}`)).toBe(true);
    });
    const tsConfig = tree.readContent(`tsconfig.json`);
    expect(tsConfig).toContain(`@sta`);
  });
});
