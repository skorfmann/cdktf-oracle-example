// https://www.terraform.io/docs/providers/oci/r/waas_purge_cache.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "resources": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "waas_policy_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
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

export interface WaasPurgeCacheConfig extends TerraformMetaArguments {
  readonly resources?: string[];
  readonly waasPolicyId: string;
  /** timeouts block */
  readonly timeouts?: WaasPurgeCacheTimeouts;
}
export interface WaasPurgeCacheTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class WaasPurgeCache extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WaasPurgeCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_purge_cache',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resources = config.resources;
    this._waasPolicyId = config.waasPolicyId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[];
  public get resources() {
    return this._resources;
  }
  public set resources(value: string[] | undefined) {
    this._resources = value;
  }

  // waas_policy_id - computed: false, optional: false, required: true
  private _waasPolicyId: string;
  public get waasPolicyId() {
    return this._waasPolicyId;
  }
  public set waasPolicyId(value: string) {
    this._waasPolicyId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WaasPurgeCacheTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: WaasPurgeCacheTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      resources: this._resources,
      waas_policy_id: this._waasPolicyId,
      timeouts: this._timeouts,
    };
  }
}
