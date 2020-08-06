// https://www.terraform.io/docs/providers/oci/r/core_default_dhcp_options.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
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
      "manage_default_resource_id": {
        "type": "string",
        "required": true
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
      "options": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "custom_dns_servers": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            },
            "search_domain_names": {
              "type": [
                "list",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "server_type": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1
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

export interface CoreDefaultDhcpOptionsConfig extends TerraformMetaArguments {
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly manageDefaultResourceId: string;
  /** options block */
  readonly options: CoreDefaultDhcpOptionsOptions[];
  /** timeouts block */
  readonly timeouts?: CoreDefaultDhcpOptionsTimeouts;
}
export interface CoreDefaultDhcpOptionsOptions {
  readonly customDnsServers?: string[];
  readonly searchDomainNames?: string[];
  readonly serverType?: string;
  readonly type: string;
}
export interface CoreDefaultDhcpOptionsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreDefaultDhcpOptions extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreDefaultDhcpOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_default_dhcp_options',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._manageDefaultResourceId = config.manageDefaultResourceId;
    this._options = config.options;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // manage_default_resource_id - computed: false, optional: false, required: true
  private _manageDefaultResourceId: string;
  public get manageDefaultResourceId() {
    return this._manageDefaultResourceId;
  }
  public set manageDefaultResourceId(value: string) {
    this._manageDefaultResourceId = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // options - computed: false, optional: false, required: true
  private _options: CoreDefaultDhcpOptionsOptions[];
  public get options() {
    return this._options;
  }
  public set options(value: CoreDefaultDhcpOptionsOptions[]) {
    this._options = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreDefaultDhcpOptionsTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreDefaultDhcpOptionsTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      manage_default_resource_id: this._manageDefaultResourceId,
      options: this._options,
      timeouts: this._timeouts,
    };
  }
}
