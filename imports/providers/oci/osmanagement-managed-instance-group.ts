// https://www.terraform.io/docs/providers/oci/r/osmanagement_managed_instance_group.html
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
      "description": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "display_name": {
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
      "managed_instance_count": {
        "type": "number",
        "computed": true
      },
      "managed_instances": {
        "type": [
          "list",
          [
            "object",
            {
              "display_name": "string",
              "id": "string"
            }
          ]
        ],
        "computed": true
      },
      "os_family": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface OsmanagementManagedInstanceGroupConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly osFamily?: string;
  /** timeouts block */
  readonly timeouts?: OsmanagementManagedInstanceGroupTimeouts;
}
export class OsmanagementManagedInstanceGroupManagedInstances extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface OsmanagementManagedInstanceGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class OsmanagementManagedInstanceGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OsmanagementManagedInstanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_managed_instance_group',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._osFamily = config.osFamily;
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

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
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

  // managed_instance_count - computed: true, optional: false, required: true
  public get managedInstanceCount() {
    return this.getNumberAttribute('managed_instance_count');
  }

  // managed_instances - computed: true, optional: false, required: true
  public managedInstances(index: string) {
    return new OsmanagementManagedInstanceGroupManagedInstances(this, 'managed_instances', index);
  }

  // os_family - computed: true, optional: true, required: false
  private _osFamily?: string;
  public get osFamily() {
    return this._osFamily ?? this.getStringAttribute('os_family');
  }
  public set osFamily(value: string | undefined) {
    this._osFamily = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OsmanagementManagedInstanceGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: OsmanagementManagedInstanceGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      description: this._description,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      os_family: this._osFamily,
      timeouts: this._timeouts,
    };
  }
}
