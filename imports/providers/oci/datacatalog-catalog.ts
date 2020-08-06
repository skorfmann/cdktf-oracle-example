// https://www.terraform.io/docs/providers/oci/r/datacatalog_catalog.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "attached_catalog_private_endpoints": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
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
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "number_of_objects": {
        "type": "number",
        "computed": true
      },
      "service_api_url": {
        "type": "string",
        "computed": true
      },
      "service_console_url": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
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

export interface DatacatalogCatalogConfig extends TerraformMetaArguments {
  readonly attachedCatalogPrivateEndpoints?: string[];
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DatacatalogCatalogTimeouts;
}
export interface DatacatalogCatalogTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatacatalogCatalog extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatacatalogCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_catalog',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attachedCatalogPrivateEndpoints = config.attachedCatalogPrivateEndpoints;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_catalog_private_endpoints - computed: true, optional: true, required: false
  private _attachedCatalogPrivateEndpoints?: string[];
  public get attachedCatalogPrivateEndpoints() {
    return this._attachedCatalogPrivateEndpoints ?? this.getListAttribute('attached_catalog_private_endpoints');
  }
  public set attachedCatalogPrivateEndpoints(value: string[] | undefined) {
    this._attachedCatalogPrivateEndpoints = value;
  }

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

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // number_of_objects - computed: true, optional: false, required: true
  public get numberOfObjects() {
    return this.getNumberAttribute('number_of_objects');
  }

  // service_api_url - computed: true, optional: false, required: true
  public get serviceApiUrl() {
    return this.getStringAttribute('service_api_url');
  }

  // service_console_url - computed: true, optional: false, required: true
  public get serviceConsoleUrl() {
    return this.getStringAttribute('service_console_url');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatacatalogCatalogTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatacatalogCatalogTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      attached_catalog_private_endpoints: this._attachedCatalogPrivateEndpoints,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      timeouts: this._timeouts,
    };
  }
}
