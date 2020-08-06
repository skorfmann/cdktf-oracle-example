// https://www.terraform.io/docs/providers/oci/r/waas_http_redirect.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "domain": {
        "type": "string",
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "response_code": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "target": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "host": {
              "type": "string",
              "required": true
            },
            "path": {
              "type": "string",
              "required": true
            },
            "port": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "protocol": {
              "type": "string",
              "required": true
            },
            "query": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WaasHttpRedirectConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly domain: string;
  readonly freeformTags?: { [key: string]: string };
  readonly responseCode?: number;
  /** target block */
  readonly target: WaasHttpRedirectTarget[];
  /** timeouts block */
  readonly timeouts?: WaasHttpRedirectTimeouts;
}
export interface WaasHttpRedirectTarget {
  readonly host: string;
  readonly path: string;
  readonly port?: number;
  readonly protocol: string;
  readonly query: string;
}
export interface WaasHttpRedirectTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class WaasHttpRedirect extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WaasHttpRedirectConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_http_redirect',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._freeformTags = config.freeformTags;
    this._responseCode = config.responseCode;
    this._target = config.target;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // response_code - computed: true, optional: true, required: false
  private _responseCode?: number;
  public get responseCode() {
    return this._responseCode ?? this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number | undefined) {
    this._responseCode = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // target - computed: false, optional: false, required: true
  private _target: WaasHttpRedirectTarget[];
  public get target() {
    return this._target;
  }
  public set target(value: WaasHttpRedirectTarget[]) {
    this._target = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WaasHttpRedirectTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: WaasHttpRedirectTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      domain: this._domain,
      freeform_tags: this._freeformTags,
      response_code: this._responseCode,
      target: this._target,
      timeouts: this._timeouts,
    };
  }
}
