// https://www.terraform.io/docs/providers/oci/r/data_oci_osmanagement_managed_instance_group.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "managed_instance_count": {
        "type": "number",
        "computed": true
      },
      "managed_instance_group_id": {
        "type": "string",
        "required": true
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
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciOsmanagementManagedInstanceGroupConfig extends TerraformMetaArguments {
  readonly managedInstanceGroupId: string;
}
export class DataOciOsmanagementManagedInstanceGroupManagedInstances extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}

// Resource

export class DataOciOsmanagementManagedInstanceGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOsmanagementManagedInstanceGroupConfig) {
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
    this._managedInstanceGroupId = config.managedInstanceGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_instance_count - computed: true, optional: false, required: true
  public get managedInstanceCount() {
    return this.getNumberAttribute('managed_instance_count');
  }

  // managed_instance_group_id - computed: false, optional: false, required: true
  private _managedInstanceGroupId: string;
  public get managedInstanceGroupId() {
    return this._managedInstanceGroupId;
  }
  public set managedInstanceGroupId(value: string) {
    this._managedInstanceGroupId = value;
  }

  // managed_instances - computed: true, optional: false, required: true
  public managedInstances(index: string) {
    return new DataOciOsmanagementManagedInstanceGroupManagedInstances(this, 'managed_instances', index);
  }

  // os_family - computed: true, optional: false, required: true
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_instance_group_id: this._managedInstanceGroupId,
    };
  }
}
