// https://www.terraform.io/docs/providers/oci/r/core_ipsec.html
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
      "cpe_id": {
        "type": "string",
        "required": true
      },
      "cpe_local_identifier": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cpe_local_identifier_type": {
        "type": "string",
        "optional": true,
        "computed": true
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
      "drg_id": {
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
      "state": {
        "type": "string",
        "computed": true
      },
      "static_routes": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "time_created": {
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

export interface CoreIpsecConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly cpeId: string;
  readonly cpeLocalIdentifier?: string;
  readonly cpeLocalIdentifierType?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly drgId: string;
  readonly freeformTags?: { [key: string]: string };
  readonly staticRoutes: string[];
  /** timeouts block */
  readonly timeouts?: CoreIpsecTimeouts;
}
export interface CoreIpsecTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreIpsec extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreIpsecConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ipsec',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._cpeId = config.cpeId;
    this._cpeLocalIdentifier = config.cpeLocalIdentifier;
    this._cpeLocalIdentifierType = config.cpeLocalIdentifierType;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._drgId = config.drgId;
    this._freeformTags = config.freeformTags;
    this._staticRoutes = config.staticRoutes;
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

  // cpe_id - computed: false, optional: false, required: true
  private _cpeId: string;
  public get cpeId() {
    return this._cpeId;
  }
  public set cpeId(value: string) {
    this._cpeId = value;
  }

  // cpe_local_identifier - computed: true, optional: true, required: false
  private _cpeLocalIdentifier?: string;
  public get cpeLocalIdentifier() {
    return this._cpeLocalIdentifier ?? this.getStringAttribute('cpe_local_identifier');
  }
  public set cpeLocalIdentifier(value: string | undefined) {
    this._cpeLocalIdentifier = value;
  }

  // cpe_local_identifier_type - computed: true, optional: true, required: false
  private _cpeLocalIdentifierType?: string;
  public get cpeLocalIdentifierType() {
    return this._cpeLocalIdentifierType ?? this.getStringAttribute('cpe_local_identifier_type');
  }
  public set cpeLocalIdentifierType(value: string | undefined) {
    this._cpeLocalIdentifierType = value;
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

  // drg_id - computed: false, optional: false, required: true
  private _drgId: string;
  public get drgId() {
    return this._drgId;
  }
  public set drgId(value: string) {
    this._drgId = value;
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

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes: string[];
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public set staticRoutes(value: string[]) {
    this._staticRoutes = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreIpsecTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreIpsecTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      cpe_id: this._cpeId,
      cpe_local_identifier: this._cpeLocalIdentifier,
      cpe_local_identifier_type: this._cpeLocalIdentifierType,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      drg_id: this._drgId,
      freeform_tags: this._freeformTags,
      static_routes: this._staticRoutes,
      timeouts: this._timeouts,
    };
  }
}
